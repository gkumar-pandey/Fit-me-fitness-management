import { Form, Formik } from "formik";
import React from "react";
import Input from "../Input/Input";
import Button from "../button/Button";

const ExerciseForm = ({onClose}) => {
  const exerciseFormData = {
    name: "",
    duration: 0,
    caloriesBurned: 0,
  };
  return (
    <div>
      <Formik
        initialValues={exerciseFormData}
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
              <label htmlFor="caloriesBurned">Calories Burned</label>
              <Input
                id={"caloriesBurned"}
                type={"number"}
                name={"caloriesBurned"}
                value={values.caloriesBurned}
                placeholder={"Calories Burned"}
              />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
              <Input
                id={"duration"}
                type={"number"}
                name={"duration"}
                value={values.duration}
                placeholder={"Duration"}
              />
            </div>
            <div className="flex flex-row items-center justify-end py-4 my-2">
              <Button onClick={onClose} type={'button'} variant={"outline"}>Close</Button>
              <Button type={'submit'} variant={"solid"}>Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExerciseForm;
