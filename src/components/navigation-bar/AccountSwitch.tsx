import React, { useState } from "react";

type AccountSwitchProps = {
    
  profilePicture: string;
  username: string;
  displayName: string;
};

export const AccountSwitch = ({
  profilePicture,
  username,
  displayName,
}: AccountSwitchProps) => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false); //TODO: Move to global state
  return (
    <div className="flex flex-row max-w-full space-x-4 hover:cursor-pointer">
      {/* Name and username */}
      <div className="grid-rows-[1fr_1fr]">
        <p className="text-lg font-bold float-right">{displayName}</p>
        <p className="italic">@{username}</p>
      </div>

      {/* Profile picture */}
      <img
        src={profilePicture}
        className="w-16 h-16 rounded-full object-cover m-auto max-w-min animate-spin"
      />

      {/* Dropdown chevrown */}
      <i className="fa-solid fa-chevron-down my-auto" />
    </div>
  );
};
