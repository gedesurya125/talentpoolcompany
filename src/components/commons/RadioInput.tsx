import { Typography } from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles"


const RadioContainer = styled('div')(
  ({theme}) => ({
    display: 'flex',
    // gap: '10px',
    // alignItems: 'center'
    margin: '0.5em 0.5em',
    '& .MuiTypography-root':{
      // marginRight: '0.5em'
    },
    '& input':{
      marginLeft: '1em'
    }
  })
)
interface Props {
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
const RadioInput = ({onChange}: Props) => {
  return (
    <RadioContainer>
      <Typography>Status :</Typography>
      <input type="radio" onChange={onChange} id="vacancy-active" name="hiringStatus" value="true"/>
      <label htmlFor="vacancy-active">Active</label>
      <input type="radio" onChange={onChange} id="vacancy-closed" name="hiringStatus" value="false"/>
      <label htmlFor="vacancy-closed">Closed</label>
    </RadioContainer>
  )
};

export default RadioInput;
