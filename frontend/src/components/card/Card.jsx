import React from "react";

const Card = ({ title, value, img }) => {
  return (
    <>
      <div
        className={`bg-[#FFFFFF] text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
      >
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="bg-[length:22vh_30vh] bg-center bg-end bg-no-repeat h-full w-full"
        ></div>
        <div className="flex flex-col w-full gap-3 px-4 py-4 bg-slate-100 backdrop-blur-xl rounded-b-xl">
          <h1 className="text-red-500 text-[2rem]">{value}</h1>
          <p className="text-slate-600">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
