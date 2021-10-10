import React, {useState} from 'react'
import CommonModal from '../commonMoal/CommonModal'
import {JobVacancyType} from '../../../redux/apis/companyAPI';
import { TextField } from '@mui/material';


interface Props {
  open:boolean,
  handleClose: () => void
}
const AddVacancyModal = ({open, handleClose}: Props) => {
  const [vacancy, setVacancy] = useState<JobVacancyType>({
    dateCreated: "",
    description: "",
    hiringStatus: false,
    requirement: [],
    roleOpen: []
  })
  return (
    <CommonModal open={open} title={"Add Vacancy"} handleClose={handleClose}>

      <TextField fullWidth size="small" InputLabelProps={{shrink: true}} variant="outlined" label="Created At" name="dateCreated" type="date"/>
    </CommonModal>
  )
}

export default AddVacancyModal
