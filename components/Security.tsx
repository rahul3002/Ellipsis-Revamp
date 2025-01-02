"use client"
import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { useRouter } from "next/navigation"

const Security = () => {
  const router = useRouter()
  return (
    <div id="Security" className="py-20 w-full ">
      <h1 className="heading">
        Built with  <span className="text-[rgb(77,130,162)]">security in mind</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[50rem] w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(77,130,162,0.01)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
                <br />
                <span className="cursor-pointer px-8 button1" id="" onClick={() => { window.open(`${card.Link}`) }}>Learn More</span>
              </div>
            </Button>
          ))}

        </div>
        <div className="flex flex-col gap-6 mt-12 md:p-8 p-2 w-auto md:w-[25rem]">
          <div className="">
            <h1 className="text-start text-2xl md:text-2xl font-bold">Confidence = Trust</h1>
            <p className="text-[#bfbfbf] text-sm mt-2">We understand that a wrong, confident answer is worse than a non-answer. When Ellipsis is confused, it&apos;s explicit about it.</p>
          </div>
          <div className="">
            <h1 className="text-start text-2xl md:text-2xl font-bold">No rogue commits</h1>
            <p className="text-[#bfbfbf] text-sm mt-2">Ellipsis will never commit code without your explicit permission. You can configure Ellipsis to raise a side-PR so it&apos;s changes are clear.</p>
          </div>
          <button onClick={() => router.push("https://www.ycombinator.com/launches/KW7-ellipsis-automated-code-reviews-bug-fixes")} className="flex flex-col items-start border-2 h-auto p-8 border-orange-500 text-orange-500 bg-[#724d3d88] rounded-md px-4 py-1 text-xs w-auto m-auto">
            <div className="flex flex-row">
              <span className="mr-4 my-auto font-bold text-4xl">Y</span>
              <div className="flex flex-row justify-between gap-16 items-center w-auto">
                <div className="flex w-auto flex-col">
                  <span className="text-[10px] text-left uppercase font-medium  text-gray-500 -mb-1">Featured on</span>
                  <span className=" font-bold w-auto text-xl text-left">Launch YC</span>
                </div>
                <div className="my-auto flex flex-col -ml-5">
                  <span className="text-3xl text-orange-500 -mb-5">^</span>
                  <span className="text-2xl text-orange-500">81</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div >
    </div >
  );
};

export default Security;
