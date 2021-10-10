import React, { useState } from "react";
import CommonModal from "../commonMoal/CommonModal";
import { CompanyType } from "../../../redux/apis/companyAPI";
import ImageInput from "../../commons/ImageInput";
import { defaultUserPhoto } from "../../../settings/defaultResources";
import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import VacancyListCard from "./VacancyListCard";
import AddVacancyModal from "./AddVacancyModal";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ListContainer = styled("div")(({ theme }) => ({
  marginTop: "1em",
  "& .list-title": {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  "& .list-container": {
    // display: "flex",
    // gap: "10px",
    marginTop: "0.4em",
    "& .list-item": {
      marginBottom: "0.4em",
    },
  },
}));

const AddCompanyModal = ({ open, handleClose }: Props) => {
  const [openVacancyModal, setOpenVacancyModal] = useState(false);
  const [company, setCompany] = useState<CompanyType>({
    photo: defaultUserPhoto,
    name: "",
    address: "",
    phone: "",
    website: "",
    jobVacancy: [
      {
        roleOpen: ["Backend NodeJs", "Frontend developer"],
        requirement: ["experience in Jest", "able to create API"],
        hiringStatus: false,
        description: "PrivyID is a great company",
        dateCreated: "2021-10-10T00:00:00.000Z",
      },
    ],
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((state) => ({
      ...state,
      photo: e.target.files && e.target.files[0],
    }));
  };

  const handleOpenVacancyModal = () => {
    setOpenVacancyModal(true);
  };
  const handleCloseVacancyModal = () => {
    setOpenVacancyModal(false);
  };




  const handleJobVacancyDelete = () => {};



  const renderVacancyCard = () => {
    if (
      (company.jobVacancy && company.jobVacancy.length === 0) ||
      company.jobVacancy === null
    )
      return null;
    return company.jobVacancy.map((vacancy: any, index: number) => (
      <VacancyListCard
        key={index}
        {...vacancy}
        handleDelete={handleJobVacancyDelete}
      />
    ));
  };
  return (
    <CommonModal open={open} title={"Add Company"} handleClose={handleClose} sx={{
      '& .MuiFormControl-root':{
        marginTop: '1em'
      }
    }}>
      <ImageInput value={company.photo} onChange={handlePhotoChange} />
      <TextField
        variant="outlined"
        size="small"
        label="Name"
        name="name"
        fullWidth
      />
      <TextField
        variant="outlined"
        size="small"
        label="Address"
        name="address"
        fullWidth
      />
      <TextField
        variant="outlined"
        size="small"
        label="Phone"
        name="phone"
        fullWidth
      />
      <TextField
        variant="outlined"
        size="small"
        label="Website"
        name="website"
        fullWidth
      />

      <ListContainer>
        <div className="list-title">
          <Button
            color="success"
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenVacancyModal}
          >
            Add
          </Button>
          <Typography>Vacancy</Typography>
        </div>
        <div className="list-container">{renderVacancyCard()}</div>
      </ListContainer>
      <AddVacancyModal open={openVacancyModal} handleClose={handleCloseVacancyModal}/>
    </CommonModal>
  );
};

export default AddCompanyModal;
