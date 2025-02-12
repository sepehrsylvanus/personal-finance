import { balances, pots } from "@/constants/hub";
import Image from "next/image";
import React from "react";

const Hub = () => {
  return (
    <div className="py-300 px-200 bg-beige h-screen">
      <div id="balances" className="flex flex-col gap-150">
        {balances.map((balance, index) => (
          <div
            key={index}
            className={`rounded-xl p-250 flex flex-col gap-3 ${
              index === 0 ? "bg-gray-900 text-white" : "bg-white"
            }`}
          >
            <p>{balance.title}</p>
            <p className="preset1">{balance.value}</p>
          </div>
        ))}
      </div>

      <div
        id="pots"
        className="bg-white rounded-xl py-300 px-250 mt-8 flexCol gap-250"
      >
        <div id="potsHeader" className="flexBetween">
          <p className="preset2 ">Pots</p>
          <p className="flex gap-3 text-gray-500">
            See Details
            <Image
              src={"/icons/Icon=caret-down.svg"}
              alt="caretDown"
              width={12}
              height={12}
              className="-rotate-90"
            />
          </p>
        </div>
        <div>
          <div
            id="totalSaved"
            className="bg-beige p-200 rounded-xl flex gap-200"
          >
            <Image
              src={"/icons/jarGreen.svg"}
              alt="jarGreen"
              width={40}
              height={40}
            />
            <div className="flex flex-col gap-3 ">
              <p className="text-gray-500">Total Saved</p>
              <p className="preset1 text-gray-900">$850</p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-200 mt-250">
            {pots.map((pot, index) => (
              <div
                key={index}
                className={`flexCol gap-1 border-l-4 ${
                  index === 0
                    ? "border-l-[#277C78]"
                    : index === 1
                    ? "border-l-[#82C9D7]"
                    : index === 2
                    ? "border-l-[#626070]"
                    : "border-l-[#F2CDAC]"
                } pl-200`}
              >
                <p className="text-gray-500">{pot.title}</p>
                <p>{pot.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
