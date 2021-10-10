import { Container, TextField, Button } from '@mui/material';
import React, {useState} from 'react'
import CommonModal from '../commonMoal/CommonModal';
import type {experience} from './AddTalentModal';

interface Props {
  open: boolean;
  handleClose: () => void;
  handleListedInputAdd: (key:string, newExperience:experience) => void
}

const AddExperienceModal = ({open, handleClose, handleListedInputAdd}:Props) => {
  const [newExperience, setNewExperience] = useState<experience>({
    endDate: "",
    role: "",
    company: "",
    startDate: "",
  })
  const handleExperienceAdd = ()=> {
    handleListedInputAdd("experience", newExperience);
    handleClose();
  }

  const handleInputChange = (e:any) => {
    // console.log('INI KELUARANNYA', e.target.value)
    setNewExperience(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))

  }

  return (
    <CommonModal open={open} title={"Add Experience"} handleClose={handleClose}>
      <Container sx={{
        marginTop: '1em',
        textAlign: 'center',
        '& .MuiFormControl-root':{
          marginBottom: '1em'
        }
        }}>
        <TextField value={newExperience.role} onChange={handleInputChange} name="role" variant="outlined" size="small" label="Role" fullWidth/>
        <TextField value={newExperience.company} onChange={handleInputChange} name="company" variant="outlined" size="small" label="Company" fullWidth/>
        {/* <BasicDatePicker value={new Date()} onChange={() => {}}/> */}
        <TextField value={newExperience.startDate} name="startDate" onChange={handleInputChange} variant="outlined" size="small" label="Start Date" type="date" InputLabelProps={{shrink: true}} fullWidth/>
        <TextField value={newExperience.endDate} onChange={handleInputChange} name="endDate" variant="outlined" size="small" label="End Date" type="date" InputLabelProps={{shrink: true}} fullWidth/>
        <Button sx={{marginBottom: '0.5em'}}  variant="contained" size="small" onClick={handleExperienceAdd}>Save</Button>
      </Container>  
    </CommonModal>
  )
}

export default AddExperienceModal
