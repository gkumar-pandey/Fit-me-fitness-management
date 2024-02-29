import React from "react";

const ExerciseCard = ({ name, duration, caloriesBurned }) => {
  return (
    <>
      <div className="block w-full p-6 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">{name}</h5>
        <div className="flex flex-col gap-2 py-2">
          <div className="flex flex-row items-center gap-1 font-normal ">
            <h5 className="font-semibold">Duration</h5>
            <p>{duration}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold">Calories Burned</h5>
            <p>{caloriesBurned}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
