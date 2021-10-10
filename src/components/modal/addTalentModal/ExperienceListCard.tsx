import React from "react";
import { formatDate } from "../../../functions/dateReformat";
import { styled } from "@mui/material/styles";
import { IconButton, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import type { experience } from "./AddTalentModal";

// role: "sales",
// company: "indoWarung",
// startDate: "2021-09-02",
// endDate: "2021-01-01",

const ExperienceContainer = styled("div")(({ theme }) => ({
  padding: "0.5em 1em",
  backgroundColor: "hsla(234, 80%, 50%, 1)",
  borderRadius: "5px",
  marginTop: "0.5em",
  position: "relative",
}));
interface Props {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  handleDelete: (experience: experience) => void;
}
const ExperienceListCard = ({
  role,
  company,
  startDate,
  endDate,
  handleDelete,
}: Props) => {

  const handleDeleteExperience = () => {
    handleDelete({
      role,
      company,
      startDate,
      endDate,
    });
  };
  return (
    <ExperienceContainer className="list-item">
      <Typography fontWeight="bold">{`${role} at ${company}`}</Typography>
      <Typography variant="caption">{`from ${formatDate(
        startDate
      )} to ${formatDate(endDate)}`}</Typography>
      <IconButton onClick={handleDeleteExperience} sx={{ position: "absolute", top: "2px", right: "2px" }}>
        <HighlightOffIcon />
      </IconButton>
    </ExperienceContainer>
  );
};

export default ExperienceListCard;
