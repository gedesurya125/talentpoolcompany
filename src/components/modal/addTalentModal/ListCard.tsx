import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import React from "react";
import type {education} from './AddTalentModal';

const ListContainer = styled("div")(({ theme }) => ({
  padding: "5px 10px",
  backgroundColor: "gray",
  borderRadius: "4px",
  display: "flex",
  // justifyContent: 'center',
  alignItems: "center",
  position: "relative",
}));
interface Props {
  text: string;
  handleEducationDelete: (education:education) => void
}
const ListCard = ({ text, handleEducationDelete }: Props) => {

  const handleDelete = () => {
    handleEducationDelete(text);
  }
  return (
    <ListContainer className="list-item">
      <Typography>{text}</Typography>
      <IconButton onClick={handleDelete} sx={{marginLeft: 'auto', padding: 0}}><HighlightOffIcon/></IconButton>
    </ListContainer>
  );
};

export default ListCard;
