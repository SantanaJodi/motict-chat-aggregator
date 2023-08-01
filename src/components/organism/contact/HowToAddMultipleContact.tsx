"use client";
import Image from "next/image";
import React from "react";

interface HowToAddMultipleContactProps {}

const HowToAddMultipleContact: React.FC<HowToAddMultipleContactProps> = () => {
  return (
    <div className="w-[375px] p-4 flex flex-col gap-8 flex-shrink-0 bg-white border-l border-[#EEF5FF] overflow-auto">
      <div className="flex flex-col gap-4">
        <h2 className="m-0 text-xl text-[#0D0F12] font-bold">
          Upload Multiple Contact
        </h2>
        <p className="text-[#8B9EB7]">
          Save time by uploading your own contacts list using CSV or XLS File
          for outbound message recipient.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#0D0F12] font-bold">
          Get ID from Whatsapp & Web chat channel
        </p>
        <ol>
          <li>
            1. Open <b>Channel Integration</b>
          </li>
          <li>
            2. Select <b>Email, WhatsApp</b> or <b>Web Chat</b>
          </li>
          <li>
            3. Click <b>Setting on Email, WhatsApp</b> or <b>Web Chat</b>{" "}
            integration selected
          </li>
          <li>4. Copy the ID by clicking the copy button</li>
        </ol>
        <Image
          src="/images/wa-integration.png"
          alt="wa-integration"
          width={343}
          height={92}
        />
        <div className="flex flex-col gap-4">
          <p className="text-[#0D0F12] font-bold">How to use template?</p>
          <ol>
            <li>
              1. Download and open the <b>.xls or .csv</b> file
            </li>
            <li>
              2. Input the <b>Fullname</b> field
            </li>
            <li>
              3. Input the <b>Channel Integration</b>
            </li>
            <li>
              4. Input Account Unique ID
              <ol type="a" className="ml-6">
                <li>
                  a. WhatsApp
                  <ul className="ml-4">
                    <li>
                      081145678098 -{" "}
                      <span className="text-[#CB5237]">wrong example</span>{" "}
                    </li>
                    <li>
                      6281145678098 -{" "}
                      <span className="text-[#4ABF71]">correct example</span>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  b. Web chat & Email
                  <ul className="ml-4">
                    <li>
                      Sample.domain.com -{" "}
                      <span className="text-[#CB5237]">wrong example</span>{" "}
                    </li>
                    <li>
                      sample@domain.com -{" "}
                      <span className="text-[#4ABF71]">correct example</span>{" "}
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>5. Input selected channel</li>
            <li>6. Save the template as .xls or .csv file format</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HowToAddMultipleContact;
