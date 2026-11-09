import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculateScore, CampaignError, processOperation, resultLevel, validateAnswers, visibleQuestions } from '../lib/toxic-test/core.ts';
const fixture = JSON.parse(readFileSync(new URL('./fixtures/toxic-test.json', import.meta.url)));
const questions = fixture.questions;
const required = Object.fromEntries(questions.filter(q=>q.required).map(q=>[q.id,q.field_type==='name'?{first:'Layout',last:'Test'}:'layout@example.com']));
const formId = '5baee620-bd45-4965-86da-e649ab3d6a8d';
function store() {
 const rows = new Map();
 return {rows, async find(id,token){const r=rows.get(id);return r?.resume_token===token&&r.status==='in_progress'?r:null;},async create(r){rows.set(r.id,r);},async update(id,token,patch){const row=rows.get(id);if(!row||row.resume_token!==token||row.status!=='in_progress')return false;rows.set(id,{...row,...patch});return true;}};
}
test('live questionnaire has 17 unchanged fields and 39 scoring indicators',()=>{
 assert.equal(questions.length,17);assert.equal(questions.filter(q=>q.field_type==='radio').length,10);assert.equal(calculateScore(questions,{}).scoreMax,39);
 const all={...required};for(const q of questions){if(q.field_type==='radio')all[q.id]='yes';if(q.field_type==='checkbox')all[q.id]=q.options.map(o=>o.value);}
 assert.deepEqual(calculateScore(questions,all),{scorePoints:39,scoreMax:39,scorePercentage:100});
 const check=questions.find(q=>q.field_type==='checkbox');assert.equal(calculateScore(questions,{[check.id]:[check.options[0].value,check.options[0].value,'invalid']}).scorePoints,1);
});
test('required structured names and emails are validated; unknown ids/options excluded',()=>{
 assert.equal(Object.keys(validateAnswers(questions,{},true).errors).length,2);
 const name=questions[0];assert(validateAnswers(questions,{...required,[name.id]:{first:' ',last:'Test'}},true).errors[name.id]);
 const email=questions.find(q=>q.field_type==='email');assert(validateAnswers(questions,{...required,[email.id]:'invalid'},true).errors[email.id]);
 const checked=validateAnswers(questions,{...required,unexpected:'no',[questions[1].id]:'forged'},true);assert(checked.errors[questions[1].id]);assert.equal(checked.answers.unexpected,undefined);
});
test('conditional visibility and scoring ignore hidden and cascading hidden answers',()=>{
 const first=questions[1],second={...questions[2],conditional_logic:{enabled:true,conditions:[{questionId:first.id,operator:'equals',value:'yes'}]}},third={...questions[3],conditional_logic:{enabled:true,conditions:[{questionId:second.id,operator:'equals',value:'yes'}]}};
 const qs=[first,second,third],answers={[first.id]:'no',[second.id]:'yes',[third.id]:'yes'};
 assert.equal(visibleQuestions(qs,answers).length,1);assert.deepEqual(calculateScore(qs,answers),{scorePoints:0,scoreMax:1,scorePercentage:0});assert.equal(Object.keys(validateAnswers(qs,answers,true).answers).length,1);
});
test('result thresholds retain existing boundary behavior',()=>{
 for(const[n,title]of[[0,'Lower'],[24,'Lower'],[25,'Moderate'],[49,'Moderate'],[50,'High'],[74,'High'],[75,'Very High'],[100,'Very High']])assert(resultLevel(n).title.startsWith(title));
});
test('draft creation, authenticated resume, atomic completion and replay protection',async()=>{
 const db=store();const saved=await processOperation(fixture,formId,db,{operation:'save',version:fixture.version,answers:required});assert(saved.responseId&&saved.resumeToken);assert.equal(db.rows.size,1);
 const loaded=await processOperation(fixture,formId,db,{operation:'load',...saved});assert.deepEqual(loaded.answers,required);
 const bad=await processOperation(fixture,formId,db,{operation:'load',responseId:saved.responseId,resumeToken:crypto.randomUUID()});assert.equal(bad.found,false);
 await assert.rejects(()=>processOperation(fixture,formId,db,{operation:'submit',...saved,version:'stale',answers:required}),e=>e instanceof CampaignError&&e.status===409);
 const done=await processOperation(fixture,formId,db,{operation:'submit',...saved,version:fixture.version,answers:{...required,[questions[1].id]:'yes'}});assert.equal(done.score.scorePoints,1);assert.equal(done.score.scoreMax,39);assert.equal(db.rows.get(saved.responseId).resume_token,null);assert.equal(db.rows.get(saved.responseId).status,'submitted');
 await assert.rejects(()=>processOperation(fixture,formId,db,{operation:'submit',...saved,version:fixture.version,answers:required}),e=>e.status===409);assert.equal(db.rows.size,1);
});
test('tampered ids, incomplete submission and unknown operation cannot create records',async()=>{
 const db=store();for(const body of [{operation:'delete'},{operation:'save',version:fixture.version,answers:{},responseId:'not-a-uuid',resumeToken:'bad'},{operation:'submit',version:fixture.version,answers:{}}])await assert.rejects(()=>processOperation(fixture,formId,db,body));assert.equal(db.rows.size,0);
});
