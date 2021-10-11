import { Button, Container, TextField } from '@mui/material';
import React, {useState} from 'react';
import CommonModal from '../commonMoal/CommonModal';
// import type {education} from './AddTalentModal';


interface Props {
  open: boolean;
  handleClose: () => void;
  handleAddRoleOpen: (key:string, newRoleOpen:string) => void
}
const AddRoleOpenModal = ({open, handleClose, handleAddRoleOpen}:Props) => {
  const [newRoleOpen, setNewRoleOpen] =useState<string>("");
  
  const handleChangeRoleOpen = (e:any) => {
    setNewRoleOpen(e.target.value);
  }

  const handleSaveNewRoleOpen = () => {
    handleAddRoleOpen("roleOpen",newRoleOpen);
    handleClose()
  }

  return (
    <CommonModal open={open} title={"Add RoleOpen"} handleClose={handleClose} sx={{
      marginTop: '0px',
      top: '40%'
    }}>
      <Container sx={{
        marginTop: '1em',
        textAlign: 'center'
      }}>
        <TextField value={newRoleOpen} onChange={handleChangeRoleOpen} variant="outlined" size="small" label="RoleOpen Details" fullWidth/>
        <Button onClick={handleSaveNewRoleOpen} sx={{margin: '1em'}} variant="contained" size="small" >Save</Button>
      </Container>
    </CommonModal>
  )
}

export default AddRoleOpenModal
