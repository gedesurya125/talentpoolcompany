import { Button, Container, TextField } from '@mui/material';
import React, {useState} from 'react';
import CommonModal from '../commonMoal/CommonModal';
// import type {education} from './AddTalentModal';


interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddRequirement: (key:string, newRequirement:string) => void
}
const AddRequirementModal = ({open, handleClose, handleAddRequirement}:Props) => {
  const [newRequirement, setNewRequirement] =useState<string>("");
  
  const handleChangeRequirement = (e:any) => {
    setNewRequirement(e.target.value);
  }

  const handleSaveNewRequirement = () => {
    handleAddRequirement("requirement",newRequirement);
    handleClose()
  }

  return (
    <CommonModal open={open} title={"Add Requirement"} handleClose={handleClose} sx={{
      marginTop: '0px',
      top: '40%'
    }}>
      <Container sx={{
        marginTop: '1em',
        textAlign: 'center'
      }}>
        <TextField value={newRequirement} onChange={handleChangeRequirement} variant="outlined" size="small" label="Requirement Details" fullWidth/>
        <Button onClick={handleSaveNewRequirement} sx={{margin: '1em'}} variant="contained" size="small" >Save</Button>
      </Container>
    </CommonModal>
  )
}

export default AddRequirementModal
