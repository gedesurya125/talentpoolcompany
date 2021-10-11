import React, { useState } from "react";
import CommonModal from "../commonMoal/CommonModal";
import { CompanyType, JobVacancyType } from "../../../redux/apis/companyAPI";
import ImageInput from "../../commons/ImageInput";
import { defaultUserPhoto } from "../../../settings/defaultResources";
import { TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import VacancyListCard from "./VacancyListCard";
import AddVacancyModal from "./AddVacancyModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { CircularProgress } from "@mui/material";
import { createCompanyAction } from "../../../redux/actions/companyAction";

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
  const dispatch = useDispatch();
  const companyReducer = useSelector((state: RootState) => state.company);

  const [openVacancyModal, setOpenVacancyModal] = useState(false);
  const [company, setCompany] = useState<CompanyType>({
    photo: defaultUserPhoto,
    name: "",
    address: "",
    phone: "",
    website: "",
    jobVacancy: [],
  });

  const handleResetDataCompany = () => {
    setCompany({
      photo: defaultUserPhoto,
      name: "",
      address: "",
      phone: "",
      website: "",
      jobVacancy: [],
    });
  };

  const handleGenericInputChange = (e: any) => {
    setCompany((state: any) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateCompany = () => {
    // console.log("INI DATA YANG AKAN DI KIRIM :", company);
    dispatch(createCompanyAction(company, handleClose))
  };
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

  const handleSaveVacancy = (vacancy: JobVacancyType) => {
    setCompany((state) => ({
      ...state,
      jobVacancy: [...state.jobVacancy, vacancy],
    }));
  };

  const handleJobVacancyDelete = (dateCreated: string, description: string) => {
    const newVacancy = company.jobVacancy.filter(
      (vac) =>
        !(vac.dateCreated === dateCreated && vac.description === description)
    );
    setCompany((state) => ({
      ...state,
      jobVacancy: newVacancy,
    }));
  };

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
    <CommonModal
      open={open}
      title={"Add Company"}
      handleClose={handleClose}
      sx={{
        "& .MuiFormControl-root": {
          marginTop: "1em",
        },
        "& .button-container": {
          marginTop: "1em",
          marginBottom: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        },
      }}
    >
      <ImageInput value={company.photo} onChange={handlePhotoChange} />
      <TextField
        value={company.name}
        onChange={handleGenericInputChange}
        variant="outlined"
        size="small"
        label="Name"
        name="name"
        fullWidth
      />
      <TextField
        value={company.address}
        onChange={handleGenericInputChange}
        variant="outlined"
        size="small"
        label="Address"
        name="address"
        fullWidth
      />
      <TextField
        value={company.phone}
        onChange={handleGenericInputChange}
        variant="outlined"
        size="small"
        label="Phone"
        name="phone"
        fullWidth
      />
      <TextField
        value={company.website}
        onChange={handleGenericInputChange}
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
      <div className="button-container">
        <Button
          startIcon={
            companyReducer.loading && (
              <CircularProgress color="warning" size={20} />
            )
          }
          onClick={handleCreateCompany}
          variant="contained"
        >
          Save
        </Button>
        <Button
          onClick={handleResetDataCompany}
          variant="contained"
          color="secondary"
        >
          Clear
        </Button>
      </div>
      <AddVacancyModal
        open={openVacancyModal}
        handleClose={handleCloseVacancyModal}
        handleSaveVacancy={handleSaveVacancy}
      />
    </CommonModal>
  );
};

export default AddCompanyModal;
