import * as React from "react";
import Button from "@mui/material/Button";
import "./RoomSelection.css" 
// import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


function RoomSelection() {
  return (
    <div className="room_selection_body">
      <div className="room_selection_buttons">
      <Button variant="contained" startIcon={<AddCircleIcon/>}>Create Room</Button>
      <Button variant="contained" startIcon={<MeetingRoomIcon/>} color="success">Join Room</Button>

      </div>
    </div>
  );
}

export default RoomSelection;
