import { Form, Formik } from "formik";
import React from "react";
import Input from "../Input/Input";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createExercise } from "../../store/features/exerciseSlice";

const ExerciseForm = ({ onClose }) => {
  const exerciseFormData = {
    name: "",
    duration: 0,
    calories_burned: 0,
  };
  const dispatch = useDispatch();
  const submitBtnHandler = (data) => {
    dispatch(createExercise(data));
    onClose();
  };
  return (
    <div>
      <Formik
        initialValues={exerciseFormData}
        onSubmit={(values, actions) => {
          submitBtnHandler(values);
          actions.resetForm(exerciseFormData);
        }}
      >
        {({ handleSubmit, handleChange, errors, values }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id={"name"}
                type={"text"}
                onChange={handleChange}
                name={"name"}
                value={values.name}
                placeholder={"Exercise Name"}
              />
            </div>
            <div>
              <label htmlFor="caloriesBurned">Calories Burned</label>
              <Input
                id={"calories_burned"}
                type={"number"}
                onChange={handleChange}
                name={"calories_burned"}
                value={values.calories_burned}
                placeholder={"Calories Burned"}
              />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <Input
                id={"duration"}
                onChange={handleChange}
                type={"number"}
                name={"duration"}
                value={values.duration}
                placeholder={"Duration"}
              />
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

export default ExerciseForm;
