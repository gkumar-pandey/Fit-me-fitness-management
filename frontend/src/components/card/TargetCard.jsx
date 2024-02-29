import React from "react";

const TargetCard = ({ name, caloreis, description, target_date, status }) => {
  return (
    <>
      <div className="block w-full p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">{name}</h5>
        <div className="flex flex-col gap-2 py-2">
          <div className="flex flex-row items-center gap-1 font-normal ">
            <h5 className="font-semibold">Description</h5>
            <p>{description}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold">Target Calories</h5>
            <p>{caloreis}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold">Target Date</h5>
            <p>{target_date}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold">Status</h5>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetCard;
