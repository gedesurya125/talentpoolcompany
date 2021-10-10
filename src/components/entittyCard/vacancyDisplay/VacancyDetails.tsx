import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import * as appColor from '../../../settings/appColor'
import ListedInfo from "./ListedInfo";

const VacancyContainer = styled("div")(({ theme }) => ({
  backgroundColor: appColor.backgroundColor.dark,
  padding: '0.5em',
  borderRadius: '3px',
  marginBottom: '10px',
  '& .list-title':{
    marginTop: '0.5em',
    marignBottom: '0.3em',
    fontWeight: 'bold'
  }

}));

interface Props {
  vacancy: any;
}
const VacancyDetails = (props: Props) => {
  const {hiringStatus, roleOpen, requirement, description} = props.vacancy;
  return (
    <VacancyContainer>
      <Typography className="list-title">
        Vacancy status :{" "}
        <span style={{
          color: hiringStatus ? 'green' : 'red'
        }}>{hiringStatus ? "Open" : "Closed"}</span>
      </Typography>
      <Typography className="list-title">Description :</Typography>
      <Typography>{description}</Typography>
      <Typography className="list-title">Role Open :</Typography>
      <ListedInfo items={roleOpen}/>
      <Typography className="list-title">Requirement :</Typography>
      <ListedInfo items={requirement}/>


      
    </VacancyContainer>
  );
};

export default VacancyDetails;
