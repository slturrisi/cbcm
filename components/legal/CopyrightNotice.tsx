const rtcMarks = [
  "CLEAR BODY, CLEAR MIND",
  "DIANETICS",
  "HUBBARD",
  "L. RON HUBBARD",
  "LRH",
  "PURIFICATION",
  "PURIFICATION PROGRAM",
  "PURIFICATION RUNDOWN",
  "SCIENTOLOGIST",
  "SCIENTOLOGY",
  "SCIENTOLOGY SYMBOL",
  "SCIENTOLOGY CROSS",
  "THE BRIDGE",
];

export default function CopyrightNotice() {
  return (
<div className="space-y-6">
            <p>
              All materials available on this site are protected by applicable
              copyright laws and international copyright treaty provisions.
              Materials are made available on this website for viewing by users
              of this site.
            </p>

            <p>
              Except where expressly permitted, users are not authorized to
              download, transmit, reproduce, distribute or otherwise copy these
              materials by electronic, mechanical or other means.
            </p>

            <p >
              © 2026 Church of Scientology of Central Ohio. All Rights
              Reserved.
            </p>

            <p>
              Grateful acknowledgement is made to L. Ron Hubbard Library for
              permission to reproduce selections from the copyrighted works of
              L. Ron Hubbard.
            </p>

            <p>
              Materials originally published by Bridge Publications, Inc. are
              reproduced with permission where applicable.
            </p>

            <div className="pt-2">
              <h3>Photographs of L. Ron Hubbard</h3>

              <p >
                © 1953, 1958, 1979, 1991, 1996 L. Ron Hubbard Library. All
                Rights Reserved.
              </p>
            </div>

            <p>
              The following are trademarks or service marks owned by Religious
              Technology Center, Los Angeles, California, USA. These marks are
              licensed for use by the Church of Scientology International and
              its affiliated organizations and have been registered in numerous
              countries. Other applications for registration may be pending.
            </p>

            <p >
              {rtcMarks.join(", ")}.
            </p>

            <p>
              SCIENTOLOGIST is a collective membership mark designating members
              of affiliated churches and missions of Scientology.
            </p>

            <div className="border-t border-[#0c3341]/10 pt-9">
              <h3 >
                Additional Information
              </h3>

              <p className="mt-5">
                For the comprehensive international copyright and trademark
                notice relating to Scientology and Dianetics materials, visit
                the official Scientology website.
              </p>

              <a
                href="https://www.scientology.org/tmnotice.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center"
              >
                View the Official Trademark Notice
              </a>
            </div>
          </div>
  );
}
