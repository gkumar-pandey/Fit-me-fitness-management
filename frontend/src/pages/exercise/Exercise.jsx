import React, { useState } from "react";

import {
  Button,
  PageTitle,
  ExerciseCard,
  Container,
  Modal,
  ExerciseForm,
} from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";

const Exercise = () => {
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const { exercises, isLoading, error } = useSelector(
    (state) => state.exercise
  );
  const exerciseData = [{ name: "Pilates", duration: 60, caloriesBurned: 400 }];
  const handleFormModal = () => {
    setFormModalOpen(!isFormModalOpen);
  };
  return (
    <>
      <Container>
        <PageTitle title={"Exercise"} />
        <div className="py-4">
          <Button
            onClick={handleFormModal}
            leftIcon={<IoMdAdd />}
            variant="solid"
          >
            Add Exercise
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4 border">
          {exerciseData.map((ele, idx) => (
            <ExerciseCard {...ele} key={idx} />
          ))}
        </div>
        <Modal
          title={"Add Exercise"}
          onClose={handleFormModal}
          isOpen={isFormModalOpen}
        >
          <ExerciseForm />
        </Modal>
      </Container>
    </>
  );
};

export default Exercise;
