import test from 'node:test';
import assert from 'node:assert/strict';
import { addItem, changeLanguage, itemKey, languages, parseCart, subtotal } from '../lib/cart.ts';

const english = { format: 'Paperback', language: 'English', quantity: 1 };
test('catalog matches all 17 screenshot languages', () => {
  assert.equal(languages.length, 17);
  for (const language of ['Hebrew', 'Swedish', 'Spanish (Castillian)', 'Spanish (Latin American)', 'Chinese Traditional']) assert(languages.includes(language));
});
test('matching variants merge; languages remain separate', () => {
  let cart = addItem([], english);
  cart = addItem(cart, { ...english, quantity: 2 });
  cart = addItem(cart, { ...english, language: 'Hebrew' });
  assert.equal(cart.length, 2); assert.equal(cart[0].quantity, 3); assert.equal(subtotal(cart), 80);
});
test('language changes merge equivalent lines without dropping quantity', () => {
  const cart = [english, { ...english, language: 'French', quantity: 2 }];
  assert.deepEqual(changeLanguage(cart, itemKey(cart[1]), 'English'), [{ ...english, quantity: 3 }]);
  assert.equal(changeLanguage([{ ...english, quantity: 99 }, cart[1]], itemKey(cart[1]), 'English'), null);
});
test('limits reject invalid or excessive additions', () => {
  for(const quantity of [0, -1, 1.5, 100, NaN]) assert.equal(addItem([], { ...english, quantity }), null);
  assert.equal(addItem([{ ...english, quantity: 99 }], english), null);
  assert.equal(addItem([], { ...english, language: 'Unknown' }), null);
});
test('untrusted persisted data is validated and only catalog fields survive', () => {
  for (const raw of ['bad json', '{}', 'null']) assert.deepEqual(parseCart(raw), []);
  assert.deepEqual(parseCart(JSON.stringify([null, { ...english, format: '__proto__' }, { ...english, quantity: '3' }, { ...english, language: 'Unknown' }])), []);
  assert.deepEqual(parseCart(JSON.stringify([{ ...english, price: 0.01, email: 'not-to-be-persisted' }])), [english]);
  assert.deepEqual(parseCart(JSON.stringify([english, english])), [{ ...english, quantity: 2 }]);
});

test('hardcover is unavailable and removed from old saved carts', () => {
  const hardcover = { ...english, format: 'Hardcover' };
  assert.equal(addItem([], hardcover), null);
  assert.deepEqual(parseCart(JSON.stringify([hardcover, english])), [english]);
});
