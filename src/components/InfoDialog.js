"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InformationContent from "./InformationContent";
import InfoList from "./InfoList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function InfoDialog() {
  const [open, setOpen] = React.useState(false);
  const [prev, setPrev] = React.useState(false);
  const [next, setNext] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleBefor = () => {
    setNext(true);
    setPrev(false);
  };

  const handleNext = () => {
    setNext(false);
    setPrev(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const infoData = [
    {
      img: "death.webp",
      name: "Death",
      paragraph:
        "This bullet allows the player to win the round and continue playing. The player can choose to play with a higher amount and increase the supershot or take tickets out and leave the game.",
    },
    {
      img: "win.webp",
      name: "Win",
      paragraph:
        "This bullet allows the player to win the round and continue playing. The player can choose to play with a higher amount and increase the supershot or take tickets out and leave the game.",
    },
    {
      img: "multiplier.webp",
      name: "Multiplier",
      paragraph:
        "This bullet allows the player to win the round and continue playing. The player can choose to play with a higher amount and increase the supershot or take tickets out and leave the game.",
    },
    {
      img: "death.webp",
      name: "Death",
      paragraph:
        "This bullet allows the player to win the round and continue playing. The player can choose to play with a higher amount and increase the supershot or take tickets out and leave the game.",
    },
    {
      img: "multiplier.webp",
      name: "Multiplier",
      paragraph:
        "This bullet gives player the option to increases the player's ticket by 10%, or just pass it, if user chooses to multiply all other players will need to accept the new ticket amount or leave the game, also  the player needs to have the extra ticket in balance to apply the multiplier or can purchase more tickets at that time.",
    },
  ];

  return (
    <div className="">
      <button className="infoBtn" onClick={handleClickOpen}>
        i
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
      >
        <DialogContent className="dialogInfo">
          <DialogActions>
            <CloseIcon
              style={{ cursor: "pointer" }}
              className="dilogCloseBtn"
              onClick={handleClose}
            />
          </DialogActions>

          <DialogContentText className="dialogContentText">
            {!prev && <InformationContent />}

            {!next && <InfoList data={infoData} />}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div className="swapBtn">
                <NavigateBeforeIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleBefor}
                  fontSize="large"
                  color={next ? "disabled" : ""}
                />
                <NavigateNextIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                  color={prev ? "disabled" : ""}
                  fontSize="large"
                />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
