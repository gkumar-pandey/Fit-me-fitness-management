import { Form, Formik } from "formik";
import React from "react";
import Input from "../Input/Input";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createTarget } from "../../store/features/targetSlice";

const TargetForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const targetFormData = {
    name: "",
    calories: 0,
    target_date: "",
    description: "",
    status: "",
  };
  const submitBtnHandler = (data) => {
    dispatch(createTarget(data));
  };
  return (
    <div>
      <Formik
        initialValues={targetFormData}
        onSubmit={(values, actions) => {
          submitBtnHandler(values);
          actions.resetForm(targetFormData);
          onClose();
        }}
      >
        {({ handleSubmit, handleChange, errors, values }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id={"name"}
                type={"text"}
                name={"name"}
                onChange={handleChange}
                value={values.name}
                placeholder={"Exercise Name"}
              />
            </div>
            <div>
              <label htmlFor="calories">Calories</label>
              <Input
                id={"calories"}
                type={"number"}
                name={"calories"}
                onChange={handleChange}
                value={values.calories}
                placeholder={"Calories"}
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                id="description"
                name="description"
                value={values.description}
                rows="3"
                onChange={handleChange}
                className="block p-2.5 w-full bg-[var(--primary-bg-color)] text-white rounded-lg border border-gray-600 my-2"
                placeholder="Description..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="target_date">Target Date</label>
              <input
                id="target_date"
                name="target_date"
                onChange={handleChange}
                value={values.target_date}
                className="w-full my-2 border p-2.5 rounded-md text-white bg-[var(--primary-bg-color)] border-gray-700 cursor-pointer"
                type="date"
              />
            </div>
            <div>
              <label>Status</label>
              <select
                onChange={handleChange}
                className="w-full border p-2.5 rounded-md border-gray-700 bg-[var(--primary-bg-color)] text-white "
                value={values.status}
                name="status"
                id="status"
              >
                <option>Select Option</option>

                <option value={"In Progress"}>In Progress</option>
                <option value={"Achieved"}>Achieved</option>
                <option value={"Not Achieved"}>Not Achieved</option>
              </select>
            </div>

            <div className="flex flex-row items-center justify-end py-4 my-2">
              <Button onClick={onClose} type={"button"} variant={"outline"}>
                Close
              </Button>
              <Button type={"submit"} variant={"solid"}>
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TargetForm;
