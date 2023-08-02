import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Image from "next/image";

export default function ProfileInfo() {
  return (
    <div className="centered_item">
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
              border: "1px solid #604b37",
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
            placeholder="Name"
          />
        </FormControl>
      </Box>
      <Image
        style={{
          border: "1.3px solid #efb679",
          boxShadow: "0 0 15px 0 #f1b67a",
        }}
        src="/images/death.webp"
        alt="Profile Picture "
        width={170}
        height={170}
      />
      <p className="text_uppercase">Tickets Balance: 0.00</p>
      <button
        className="plusorminus"
        style={{
          borderBottom: "0px",
        }}
      >
        +
      </button>
      <button className="wdrow_ticks text_uppercase">Widrow 0 ticks</button>
      <button
        className="plusorminus"
        style={{
          borderTop: "0px",
        }}
      >
        -
      </button>

      <button className="text_uppercase r_profile_btn">Historic</button>
      <button className="text_uppercase r_profile_btn">Leaderboard</button>
      <button
        className="text_uppercase"
        style={{
          width: "210px",
          height: "45px",
          fontSize: "25px",
          cursor: "pointer",
          background: "#23171a",
          color: "#baa998",
          border: "2px solid  #baa998",
          marginTop: "12px",
          marginBottom: "",
          //   textShadow:
          //     "0 0 10px #ff3665, 2px 2px 10px #ff3665, -2px -2px 10px #ff3665",
          boxShadow: "inset 0 0 0.5em 0 #baa998, 0 0 0.5em 0 #baa998",
        }}
      >
        Disconect
      </button>
    </div>
  );
}
