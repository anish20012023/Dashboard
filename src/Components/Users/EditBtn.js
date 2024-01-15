import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function EditBtn({ params }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/user/edituser", { state: params.row });
  }
  return (
    <IconButton onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
}

export default EditBtn;
