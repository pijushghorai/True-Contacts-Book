import React from "react";
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";

function NewContact({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
        <div onClick={onClose} className="grid place-items-center backdrop-blur-md h-screen w-screen absolute top-0 z-40" />
        <div className="flex flex-col max-w-[350px] bg-gray rounded-md p-4 m-auto relative z-50">
          <div className="flex justify-end">
            <RxCross2 onClick={onClose} className="text-2xl cursor-pointer text-white" />
          </div>
          {children}
        </div>
        </>
      )}
    </>
  , document.getElementById("newContact-root"));
}

export default NewContact;
