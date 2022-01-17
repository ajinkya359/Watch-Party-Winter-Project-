import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./RoomSelection.css";
import TextField from "@mui/material/TextField";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

function RoomSelection() {
  const [room_id_error, setroom_id_error] = useState(false);
  const [error_text, seterror_text] = useState("Room ID");
  const handleJoinClick = () => {
    const room_id = document.getElementById("room_id");
    if (room_id.value.length === 0) {
      console.log(0);
      setroom_id_error(true);
      seterror_text("Room ID cannot be empty");
    }
    else {
      setroom_id_error(false);
      seterror_text("")
    }
  };
  return (
    <div className="room_selection_body">
      <div className="room_selection_buttons">
        {/* <Button variant="contained" startIcon={<AddCircleIcon/>}>Create Room</Button> */}
        <TextField
          label="Room ID"
          variant="standard"
          id="room_id"
          error={room_id_error}
          helperText={error_text}

        />
        <Button
          variant="contained"
          startIcon={<MeetingRoomIcon />}
          color="success"
          onClick={handleJoinClick}
          style={{"height":"7vh"}}
        >
          Join Room
        </Button>
      </div>
    </div>
  );
}

export default RoomSelection;
