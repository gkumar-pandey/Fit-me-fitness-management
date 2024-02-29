import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../../store/features/exerciseSlice";

const ExerciseCard = ({ _id, name, duration, calories_burned }) => {
  const dispatch = useDispatch();
  const handleDeleteBtn = (id) => {
    dispatch(deleteExercise(id));
  };
  return (
    <>
      <div className="block w-full p-6 text-white bg-[var(--secondary-bg-color)] border border-gray-700 rounded-lg shadow-md ">
        <div className="flex items-center justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">{name}</h5>
          <MdDelete
            onClick={() => handleDeleteBtn(_id)}
            className="text-xl text-red-500 cursor-pointer "
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <div className="flex flex-row items-center gap-1 font-normal ">
            <h5 className="font-semibold text-[var(--off-white)] ">Duration</h5>
            <p className="text-[var(--green)]" >{`${duration} Minutes`}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold text-[var(--off-white)]">Calories Burned</h5>
            <p className=" text-[var(--green)] " >{calories_burned}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseCard;
