import { Typography } from '@mui/material'
import React from 'react'
import CommonModal from './CommonModal'


interface Props {
  open: boolean;
  handleClose: () => void;
}
const AddUserModal = ({open, handleClose}: Props) => {
  return (
    <CommonModal open={open} handleClose={handleClose}>
      <Typography>Add User Modal</Typography>
    </CommonModal>
  )
}
export default AddUserModal
