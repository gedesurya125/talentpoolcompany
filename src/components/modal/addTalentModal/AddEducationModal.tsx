import { Button, Container, TextField } from '@mui/material';
import React, {useState} from 'react';
import CommonModal from '../commonMoal/CommonModal';
import type {education} from './AddTalentModal';


interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddEducation: (key:string, newEducation:education) => void
}
const AddEducationModal = ({open, handleClose, handleAddEducation}:Props) => {
  const [newEducation, setNewEducation] =useState<education>("");
  
  const handleChangeEducation = (e:any) => {
    setNewEducation(e.target.value);
  }

  const handleSaveNewEducation = () => {
    handleAddEducation("education",newEducation);
    handleClose()
  }

  return (
    <CommonModal open={open} title={"Add Education"} handleClose={handleClose} sx={{
      marginTop: '0px',
      top: '40%'
    }}>
      <Container sx={{
        marginTop: '1em',
        textAlign: 'center'
      }}>
        <TextField value={newEducation} onChange={handleChangeEducation} variant="outlined" size="small" label="Education Details" fullWidth/>
        <Button onClick={handleSaveNewEducation} sx={{margin: '1em'}} variant="contained" size="small" >Save</Button>
      </Container>
    </CommonModal>
  )
}

export default AddEducationModal
