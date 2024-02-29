import React from "react";

const Card = ({ title, value, img }) => {
  return (
    <>
      <div
        className={`border border-gray-800 shadow-md text-black text-xl h-[29vh] w-[42vh] flex flex-col rounded-xl drop-shadow-md`}
      >
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-full h-full bg-center bg-no-repeat bg-cover rounded-md"
        ></div>

        <div className="flex flex-col w-full gap-3 px-4 py-4 bg-[var(--secondary-bg-color)] backdrop-blur-xl rounded-b-xl">
          <h1 className="text-[var(--green)] text-[2rem]">{value}</h1>
          <p className="text-[var(--off-white)]">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
