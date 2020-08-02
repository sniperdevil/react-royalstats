import React from "react";

function Header() {
  return (
    <div className="flex mt-2 pl-4">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Sniperdevil</h1>
        <span>#4746476f</span>
      </div>
      <div className="playe-data-category flex justify-end w-full  items-center">
        <span className="active_header mx-4 cursor-pointer text-base font-medium capitalize text-black hover:text-gray-700">
          Arena
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          Achievement
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          card
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          currunt-Deck
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          war-stats
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          battle-stats
        </span>
        <span className="mx-4 cursor-pointer text-base font-medium capitalize text-gray-700 hover:text-black">
          Challage-stats
        </span>
      </div>
    </div>
  );
}
export default Header;
