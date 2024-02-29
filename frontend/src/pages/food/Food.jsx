import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  FoodCard,
  FoodForm,
  Loader,
  Modal,
  PageTitle,
} from "../../components";
import { IoMdAdd } from "react-icons/io";
import { fetchFoods } from "../../store/features/foodSlice";

const Food = () => {
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { foods, isLoading, error } = useSelector((state) => state.food);

  const handleFormModal = () => {
    setFormModalOpen(!isFormModalOpen);
  };
  useEffect(() => {
    if (foods.length === 0) {
      dispatch(fetchFoods());
    }
  }, []);
  return (
    <>
      <Container>
        <PageTitle title={"Food"} />
        <div className="py-4">
          <Button
            onClick={handleFormModal}
            leftIcon={<IoMdAdd />}
            variant="solid"
          >
            Add Food
          </Button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-4 gap-4 ">
            {foods?.map((ele, idx) => (
              <FoodCard {...ele} key={idx} />
            ))}
          </div>
        )}

        <Modal
          title={"Add Food"}
          onClose={handleFormModal}
          isOpen={isFormModalOpen}
        >
          <FoodForm onClose={handleFormModal} />
        </Modal>
      </Container>
    </>
  );
};

export default Food;
