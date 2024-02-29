import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Input from "../Input/Input";
import Button from "../button/Button";
import { createFood } from "../../store/features/foodSlice";

const FoodForm = ({ onClose }) => {
  const foodFormData = {
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };
  const dispatch = useDispatch();
  const submitBtnHandler = (data) => {
    dispatch(createFood(data));
    onClose();
  };
  return (
    <div>
      <Formik
        initialValues={foodFormData}
        onSubmit={(values, actions) => {
          submitBtnHandler(values);
          actions.resetForm(foodFormData);
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
                placeholder={"Food Name"}
              />
            </div>
            <div>
              <label htmlFor="calories">Calories</label>
              <Input
                id={"calories"}
                type={"number"}
                onChange={handleChange}
                name={"calories"}
                value={values.calories}
                placeholder={"Calories "}
              />
            </div>
            <div>
              <label htmlFor="protein">Protein</label>
              <Input
                id={"protein"}
                type={"number"}
                onChange={handleChange}
                name={"protein"}
                value={values.protein}
                placeholder={"Protein"}
              />
            </div>
            <div>
              <label htmlFor="carbs">Carbs</label>
              <Input
                id={"carbs"}
                type={"number"}
                onChange={handleChange}
                name={"carbs"}
                value={values.carbs}
                placeholder={"Carbs"}
              />
            </div>
            <div>
              <label htmlFor="fat">Calories</label>
              <Input
                id={"fat"}
                type={"number"}
                onChange={handleChange}
                name={"fat"}
                value={values.fat}
                placeholder={"Fat"}
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

export default FoodForm;
