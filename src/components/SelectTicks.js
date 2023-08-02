"use client";

import { Box, InputAdornment, OutlinedInput } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import * as React from "react";
import FormControl from "@mui/material/FormControl";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function SelectTick() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div
        className="centered_item"
        style={{
          maxWidth: "300px",
        }}
      >
        <p className="labelText">Select Tickets</p>
        <Box>
          <FormControl
            sx={{
              m: 1,
              width: "170px",
            }}
          >
            <OutlinedInput
              sx={{
                color: "white",
                border: "1px solid #ffff",
                boxShadow: "0 0 15px 0 #604b37",
              }}
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <DriveFileRenameOutlineIcon
                    sx={{ color: "white", cursor: "pointer" }}
                  />
                </InputAdornment>
              }
              position="center"
              placeholder="Name"
            />
          </FormControl>
        </Box>
        <p className="calculateRate">
          765 GQ + 202.76 GQ (Relayer + BSC fees) = 967.76 GQ
        </p>
        <button className="aprove_button">Aprove & buy</button>
        <div>
          <FormControl
            sx={{
              m: 1,
              minWidth: 210,
              color: "white",
            }}
          >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              style={{
                color: "white",
                border: "1px solid #ffff",
                margin: "12px 0 12px 0px",
              }}
            >
              <MenuItem value={1}></MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <p className="labelText">Select Game Move</p>
        <div>
          <button className="onevsone">1vs1</button>
          <button className="onevsfive">1vs5</button>
        </div>
        <button className="play_with_friends">Play with friends</button>
        <button className="start_duel">Start Duel!</button>
      </div>
    </>
  );
}
