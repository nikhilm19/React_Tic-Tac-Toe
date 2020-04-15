import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(true);

  //setOpen(true);

  //console.log(open);

  const handleClickOpen = () => {
    console.log("se open");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("se close");
    setOpen(false);
  };

  const startNewGame = () => {
    setOpen(false);
  };
  //handleClickOpen();

  //console.log(open);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="game-finish-dialog--title">{props.winner}</DialogTitle>
        <DialogContent>
          <DialogContentText id="game-finish-dialog--description">
            {"Want to play another game?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={props.restart} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
