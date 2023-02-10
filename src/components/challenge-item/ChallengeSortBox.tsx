import React from "react";

export const ChallengeSortBox = () => {
  return (
    <div className="space-y-4">
      {/* Search */}
      <form>
        {/* A search box with a magnifying glass next to it and a placeholder of "Search..." */}
        <div className="flex flex-row items-center border-2 border-text-secondary bg-background-secondary rounded-lg px-2">
          <i className="fa-solid fa-search" />
          <input
            type="text"
            className="w-full p-2 bg-transparent focus:outline-none"
            placeholder="Search..."
            name="search"
          />
        </div>
      </form>

      {/* Filters */}
      <div>
        <div className="flex flex-row mx-2">
          <p className="font-bold text-lg">Filters</p>
          <p
            className="text-lg ml-auto hover:cursor-pointer"
            onClick={() => {
              // Clear all filters
            }}
          >
            Clear Filters
          </p>
        </div>

        {/* Checkboxes for filters */}
        
      </div>
    </div>
  );
};

// type ChallengeFilterMenuProps = {
//   title: string;
//   stateGetter: () => boolean;
//   stateSetter: (value: boolean) => void;
//   items?: string[]?;
// };

// const ChallengeFilterMenu = ({title, stateGetter, stateSetter, items}: ChallengeFilterMenuProps) => {
//   <div>

//   </div>
// }
