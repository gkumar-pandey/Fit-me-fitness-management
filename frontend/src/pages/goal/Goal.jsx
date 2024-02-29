import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Modal,
  PageTitle,
  TargetCard,
  TargetForm,
} from "../../components";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { fetchTargets } from "../../store/features/targetSlice";

const Goal = () => {
  const [isTargetFormModalOpen, setTargetFormModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { targets, isLoading, error } = useSelector((state) => state.target);
  const handleFormModal = () => {
    setTargetFormModalOpen(!isTargetFormModalOpen);
  };
  useEffect(() => {
    if (targets.length === 0) {
      dispatch(fetchTargets());
    }
  }, []);
  return (
    <Container>
      <PageTitle title={"Targets"} />
      <div className="py-4">
        <Button
          onClick={handleFormModal}
          leftIcon={<IoMdAdd />}
          variant="solid"
        >
          Add Targets
        </Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {targets?.map((ele, idx) => (
            <TargetCard {...ele} key={ele._id} />
          ))}
        </div>
      )}

      <Modal
        title={"Add Target"}
        onClose={handleFormModal}
        isOpen={isTargetFormModalOpen}
      >
        <TargetForm onClose={handleFormModal} />
      </Modal>
    </Container>
  );
};

export default Goal;
