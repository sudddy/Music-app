import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ children, isOpen }) {
  return (
    <div>
      <Dialog open={isOpen} TransitionComponent={Transition} keepMounted>
        {children}
      </Dialog>
    </div>
  );
}
