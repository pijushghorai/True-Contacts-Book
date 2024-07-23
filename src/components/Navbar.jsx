import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";

function Navbar({onOpen, filterContact}) {
  return (
    <div>
      <div className="bg-blue pt-6 pr-4 pl-4 pb-4 flex flex-col gap-4">
        <div className="title">
          <h1 className="text-white capitalize font-bold tracking-widest text-2xl">
            True contacts Book
          </h1>
        </div>
        <div className="flex items-center flex-grow gap-3 relative">
          <FiSearch className="text-white text-3xl pl-2 absolute" />
          <input
          onChange={filterContact}
            type="text"
            className="h-10 w-[295px] bg-transparent text-white pl-10 pr-3 border border-white rounded flex-grow"
          />
          <div onClick={onOpen} className="bg-white w-10 h-10 rounded-full flex justify-center items-center p-2 cursor-pointer">
            <BsPersonPlus className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
