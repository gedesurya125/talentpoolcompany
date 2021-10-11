import React from "react";
import { styled } from "@mui/material/styles";
import { JobVacancyType } from "../../../redux/apis/companyAPI";
import { IconButton, Typography } from "@mui/material";
import { formatDate } from "../../../functions/dateReformat";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ListContainer = styled("div")(({ theme }) => ({
  padding: "5px 10px",
  backgroundColor: "blue",
  borderRadius: "4px",
  // display: "flex",
  // justifyContent: 'center',
  alignItems: "center",
  position: "relative",
  marginBottom: '1em',
  "& .my-list": {
    marginBlockStart: "0px",
    marginBlockEnd: "0.5em",
    paddingLeft: "2em",
  },
}));

interface Props extends JobVacancyType {
  handleDelete: (dateCreated:string, description:string) => void;
}

const VacancyListCard = (props: Props) => {
  return (
    <ListContainer>
      <Typography fontWeight="bold">
        Date : <span>{formatDate(props.dateCreated)}</span>{" "}
        <span style={{ color: props.hiringStatus ? "green" : "red" }}>
          {props.hiringStatus ? "ACTIVE" : "CLOSED"}
        </span>
      </Typography>

      <Typography fontWeight="bold">Role Open :</Typography>
      <ul className="my-list">
        {props.roleOpen &&
          props.roleOpen.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      <Typography fontWeight="bold">Description :</Typography>
      <Typography>{props.description}</Typography>
      <Typography fontWeight="bold">Requirement :</Typography>
      <ul className="my-list">
        {props.requirement &&
          props.requirement.map((req, index) => <li key={index}>{req}</li>)}
      </ul>
      <IconButton
        onClick={() => props.handleDelete(props.dateCreated, props.description)}
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          padding: "0px",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        <HighlightOffIcon />
      </IconButton>
    </ListContainer>
  );
};

export default VacancyListCard;
