import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  const onHide = () => {
    setVisible(false);
  };
  const footer = (
    <div>
      <Button label="Yes" icon="pi pi-check" onClick={onHide} />
      <Button label="No" icon="pi pi-times" onClick={onHide} />
    </div>
  );

  const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
      <span className="pi pi-search"></span>
    </button>
  );

  return (
    <Dialog
      header="Header Text"
      footer={footer}
      icons={myIcon}
      visible={visible}
      style={{ width: "50vw" }}
      modal
      onHide={onHide}
    >
      Content
    </Dialog>
  );
};

export default Modal;
