//
//
import "./ind.css";

import { Modal, PrimaryButton } from "@triquetra/ui";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = (): void => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <PrimaryButton
        text="OpenModal"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <Modal
        containerWidth="600px"
        title="mtitle"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <div></div>
        <Modal.Body>
          <div className="btns">this is modal body</div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default App;
