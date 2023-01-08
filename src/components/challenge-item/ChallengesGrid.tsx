import React from "react";
import { ChallengeItem, ChallengeItemType } from "..";

export type ChallengesGridProps = {
  challengesList: ChallengeItemType[];
  // sortCategory: ChallengeItemType["category"];
};

export const ChallengesGrid = ({
  challengesList,
}: // sortCategory,
ChallengesGridProps) => {
  return (
    <div>
      {/* Challenges grid */}
      <div className="grid grid-cols-3 gap-2">
        {challengesList.map((challenge) => (
          <ChallengeItem
            category={challenge.category}
            title={challenge.title}
            solveRate={challenge.solveRate}
            likeRate={challenge.likeRate}
            splashUrl={challenge.splashUrl}
          />
        ))}
      </div>
    </div>
  );
};
