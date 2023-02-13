import React from "react";
import { AccountSwitch } from "./AccountSwitch";

export type NavigationItemsType = {
  title: string;
  route: string;
  // color: string;
};

export type NavigationBarProps = {
  items: NavigationItemsType[];
};

export const NavigationBar = ({ items }: NavigationBarProps) => {
  return (
    <div className="relative m-auto grid-cols-2 overflow-hidden">
      {/* Begin logo link */}
      <div className="float-left flex flex-row space-x-4">
        <img
          src="https://cdn.discordapp.com/icons/707688835408068609/51ea91200e39387ed554ec96df6195d6.png"
          className="rounded-md h-12 max-w-full"
        />
        <p className="my-auto mx-0 text-xl font-bold">CTFalcon</p>
      </div>
      {/* End logo link */}

      {/* Begin navigation links */}
      <ul className="list-none inline float-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">
        {items.map((item) => {
          return (
            <li className="float-left mx-4 font-bold text-xl hover:text-accent hover:scale-110 transition-all">
              <a href={item.route}>{item.title} </a>
            </li>
          );
        })}
      </ul>
      {/* End navigation links */}

      {/* Begin account dropdown */}
      <div className="float-right">
        <AccountSwitch
          profilePicture="https://thispersondoesnotexist.com/image"
          displayName="Someone N."
          username="someoneshere"
        />
      </div>
      {/* End account dropdown */}
    </div>
  );
};
