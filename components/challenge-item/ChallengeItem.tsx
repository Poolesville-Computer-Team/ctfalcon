import React from "react";

export type ChallengeItemType = {
  category:
    | "Binary Exploitation"
    | "Forensics"
    | "Pwn"
    | "Reverse Engineering"
    | "Web Exploitation";
  title: string;
  solveRate: number;
  likeRate: number;
  splashUrl: string;
};

export const ChallengeItem = ({
  category,
  title,
  solveRate,
  likeRate,
  splashUrl,
}: ChallengeItemType) => {
  return (
    <div className="flex group cursor-pointer transition-all border-2 border-text-secondary rounded-lg hover:border-accent overflow-hidden  relative">
      <div className="overflow-hidden">
        <img
          src={splashUrl}
          className="object-scale-down absolute m-auto -z-10 blur-md brightness-[45%]"
        />
      </div>
      <div className="z-1 inline-block p-4 overflow-hidden">
        <p className="font-[Poppins] text-text-secondary group-hover:text-white transition-all">
          {category}
        </p>
        <p className="text-2xl font-bold font-[Poppins] inline">
          {title.toLocaleLowerCase()}
        </p>

        <p className="text-text-secondary group-hover:text-white transition-all">
          {solveRate}% solved • {likeRate}% liked{" "}
        </p>
      </div>
    </div>
  );
};
