import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  PageTitle,
  TargetCard,
  TargetForm,
} from "../../components";
import { IoMdAdd } from "react-icons/io";

const Goal = () => {
  const [isTargetFormModalOpen, setTargetFormModalOpen] = useState(false);
  const handleFormModal = () => {
    setTargetFormModalOpen(!isTargetFormModalOpen);
  };
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
      <div className="grid grid-cols-4 gap-4 border">
        <TargetCard />
      </div>
      <Modal
        title={"Add Target"}
        onClose={handleFormModal}
        isOpen={isTargetFormModalOpen}
      >
        <TargetForm />
      </Modal>
    </Container>
  );
};

export default Goal;
