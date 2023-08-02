"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import InfoDialog from "./InfoDialog";

export default function LanguageSelection() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <>
      <button className="langBtn" onClick={handleClickOpen}>
        EN
      </button>

      <Dialog
        open={open}
        // TransitionComponent={Transition}
        className="languageChange"
        keepMounted
        onClose={handleClose}
        maxWidth="md"
      >
        <DialogContent className="dialogInfo">
          <div className="navbar">
            <InfoDialog />

            <div>
              <button className="langBtn" onClick={handleClose}>
                EN
              </button>
              <button className="speakerBtn">Mus</button>
            </div>
          </div>
          <div>
            <FormControl
              variant="standard"
              sx={{ m: 5, minWidth: 200 }}
              //   style={{ color: "white" }}
            >
              <label>Select Your Language</label>
              <Select
                value={lang}
                onChange={handleChange}
                style={{ color: "white", marginBottom: "30px" }}
              >
                <MenuItem value="En">English</MenuItem>
                <MenuItem value="Es">Espanish</MenuItem>
              </Select>
              <button className="slectLanguage" onClick={handleClose}>
                Ok
              </button>
            </FormControl>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
