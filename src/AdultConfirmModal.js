import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdultConfirmation(props) {

  const handleAgree = () => {
    localStorage.adultConfirmed = true;
    props.setAdultConfirmOpen(false);
  };

  const handleDisagree = () => {
    props.setAdultConfirmOpen(false);
  };

  const handleClose = () => {
    props.setAdultConfirmOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      {props.children}
      <Dialog
        open={props.adultConfirmOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Sensitive Content"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            By clicking confirm you are agreeing that you are over 18 years of
            age and that you want to see potentially explicit adult content.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
