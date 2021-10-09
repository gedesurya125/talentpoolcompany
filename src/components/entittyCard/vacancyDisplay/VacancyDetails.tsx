import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import * as appColor from '../../../settings/appColor'

const VacancyContainer = styled("div")(({ theme }) => ({
  backgroundColor: appColor.backgroundColor.dark,
  padding: '0.5em',
  borderRadius: '3px'

}));

interface Props {
  vacancy: any;
}
const VacancyDetails = (props: Props) => {
  return (
    <VacancyContainer>
      <Typography>
        Vacancy status :{" "}
        <span style={{
          color: props.vacancy.hiringStatus ? 'green' : 'red'
        }}>{props.vacancy.hiringStatus ? "Open" : "Closed"}</span>
      </Typography>
    </VacancyContainer>
  );
};

export default VacancyDetails;
