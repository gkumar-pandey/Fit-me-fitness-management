import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTarget } from "../../store/features/targetSlice";

const TargetCard = ({ name, calories, description, target_date, status }) => {
  const dispatch = useDispatch();

  const handleDeleteBtn = (id) => {
    dispatch(deleteTarget(id));
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
        <div className="flex flex-col gap-1 py-2">
          <div className="flex flex-row gap-1 font-normal text-start">
            <h5 className="font-semibold text-[var(--off-white)] ">
              Description
            </h5>
            <p className="text-[var(--green)]">{description}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold text-[var(--off-white)]">
              Target Calories
            </h5>
            <p className="text-[var(--green)]">{calories}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold text-[var(--off-white)]">
              Target Date
            </h5>
            <p className="text-[var(--green)]">{target_date}</p>
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <h5 className="font-semibold text-[var(--off-white)]">Status</h5>
            <p className="text-[var(--green)]">{status}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetCard;
