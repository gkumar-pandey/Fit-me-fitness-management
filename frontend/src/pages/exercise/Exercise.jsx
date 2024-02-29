import React, { useEffect, useState } from "react";

import {
  Button,
  PageTitle,
  ExerciseCard,
  Container,
  Modal,
  ExerciseForm,
} from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../../store/features/exerciseSlice";
import Loader from "../../components/loader/Loader";

const Exercise = () => {
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { exercises, isLoading, error } = useSelector(
    (state) => state.exercise
  );

  const handleFormModal = () => {
    setFormModalOpen(!isFormModalOpen);
  };
  useEffect(() => {
    if (exercises.length === 0) {
      dispatch(fetchExercises());
    }
  }, []);
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
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {exercises.map((ele, idx) => (
              <ExerciseCard {...ele} key={idx} />
            ))}
          </div>
        )}

        <Modal
          title={"Add Exercise"}
          onClose={handleFormModal}
          isOpen={isFormModalOpen}
        >
          <ExerciseForm onClose={handleFormModal} />
        </Modal>
      </Container>
    </>
  );
};

export default Exercise;
