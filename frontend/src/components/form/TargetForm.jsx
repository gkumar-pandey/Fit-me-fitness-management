import { Form, Formik } from "formik";
import React from "react";
import Input from "../Input/Input";
import Button from "../button/Button";

const TargetForm = ({ onClose }) => {
  const targetFormData = {
    name: "",
    calories: 0,
    target_date: null,
    description: "",
  };
  return (
    <div>
      <Formik
        initialValues={targetFormData}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, errors, values }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id={"name"}
                type={"text"}
                name={"name"}
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
                value={values.calories}
                placeholder={"Calories"}
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                id="message"
                value={values.description}
                rows="3"
                className="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 "
                placeholder="Description..."
              ></textarea>
            </div>
            <div>
              <label>Target Date</label>
              <input
                id="date"
                name="date"
                value={values.target_date}
                className="w-full my-1 border p-2.5 rounded-md"
                type="date"
              />
            </div>
            <div>
              <label>Status</label>
              <select className="w-full border p-2.5 rounded-md">
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
