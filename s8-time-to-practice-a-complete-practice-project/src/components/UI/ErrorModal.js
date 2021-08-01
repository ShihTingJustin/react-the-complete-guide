import React from "react";
import ReactDOM from 'react-dom'

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />,  document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm} />, document.getElementById('overlay-root'))}
    </>
  );
};

export default ErrorModal;
