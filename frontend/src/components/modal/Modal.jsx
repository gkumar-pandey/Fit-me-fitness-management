import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) {
    return null;
  }
  const portal = document.getElementById("portal");

  return createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-40">
        <div
          onClick={onClose}
          className="absolute w-full h-full bg-black opacity-5 backdrop-blur-lg -z-10 "
        ></div>
        <div className="p-4 border border-slate-600 bg-[var(--secondary-bg-color)] text-white rounded-lg shadow-md">
          <div className="flex items-center min-w-[500px] justify-between p-4  rounded-t md:p-5">
            <h3 className="text-xl font-semibold ">{title}</h3>
            <button
              onClick={onClose}
              className="p-0.5 rounded-md cursor-pointer hover:bg-slate-600 "
            >
              <RxCross2 className="text-xl font-semibold" />
            </button>
          </div>
          <div className="px-4">{children}</div>
        </div>
      </div>
    </>,
    portal
  );
};

export default Modal;
