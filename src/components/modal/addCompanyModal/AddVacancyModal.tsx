import React, { useState } from "react";
import CommonModal from "../commonMoal/CommonModal";
import { JobVacancyType } from "../../../redux/apis/companyAPI";
import { TextField, Button, Typography } from "@mui/material";
import RadioInput from "../../commons/RadioInput";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ListCard from "../addTalentModal/ListCard";
import AddRequirementModal from "./AddRequirementModal";
import AddRoleOpenModal from "./AddRoleOpenModal";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSaveVacancy: (vacancy: JobVacancyType) => void;
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

const AddVacancyModal = ({ open, handleClose, handleSaveVacancy }: Props) => {
  const [openRequirementModal, setOpenRequirementModal] = useState(false);
  const [openRoleOpenModal, setOpenRoleOpenModal] = useState(false);

  const [vacancy, setVacancy] = useState<JobVacancyType>({
    dateCreated: "",
    description: "",
    hiringStatus: false,
    requirement: [],
    roleOpen: [],
  });

  const handleResetDataVacancy = () => {
    setVacancy({
      dateCreated: "",
      description: "",
      hiringStatus: false,
      requirement: [],
      roleOpen: [],
    });
  };

  const handleSaveCliked = () => {
    handleSaveVacancy(vacancy);
    handleClose();
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVacancy((state) => ({
      ...state,
      [e.target.name]:
        e.target.value === "true"
          ? true
          : e.target.value === "false"
          ? false
          : e.target.value,
    }));
  };

  const handleOpenRequirementModal = () => {
    setOpenRequirementModal(true);
  };

  const handleCloseRequirementModal = () => {
    setOpenRequirementModal(false);
  };

  const handleOpenRoleOpenModal = () => {
    setOpenRoleOpenModal(true);
  };
  const handleCloseRoleOpenModal = () => {
    setOpenRoleOpenModal(false);
  };

  const handleListedInputAdd = (key: string, data: string) => {
    setVacancy((state: any) => ({
      ...state,
      [key]: [...state[key], data],
    }));
  };

  const handleRequirementDelete = (requirement: string) => {
    //ACTION TO DELETE REQUIREMENT
    const newRequirement =
      vacancy.requirement &&
      vacancy.requirement.filter((requ: string) => requ !== requirement);
    setVacancy((state: any) => ({
      ...state,
      requirement: newRequirement,
    }));
  };

  const renderRequirement = () => {
    if (
      (vacancy.requirement && vacancy.requirement.length === 0) ||
      vacancy.requirement === null
    )
      return null;
    return vacancy.requirement.map((requ: string, index: number) => (
      <ListCard
        key={index}
        text={requ}
        handleEducationDelete={handleRequirementDelete}
      />
    ));
  };

  const handleRoleOpenDelete = (role: string) => {
    //ACTION TO DELETE ROLE
    const newRoleOpen =
      vacancy.roleOpen &&
      vacancy.roleOpen.filter((roleOpen: string) => roleOpen !== role);
    setVacancy((state: any) => ({
      ...state,
      roleOpen: newRoleOpen,
    }));
  };
  const renderRoleOpen = () => {
    if (
      (vacancy.roleOpen && vacancy.roleOpen.length === 0) ||
      vacancy.roleOpen === null
    )
      return null;
    return vacancy.roleOpen.map((role: string, index: number) => (
      <ListCard
        key={index}
        text={role}
        handleEducationDelete={handleRoleOpenDelete}
      />
    ));
  };
  return (
    <CommonModal
      open={open}
      title={"Add Vacancy"}
      handleClose={handleClose}
      sx={{
        // top: "1%",
        "& .MuiFormControl-root": {
          marginTop: "1em",
        },
        "& .button-container": {
          marginTop: "1em",
          marginBottom: '1em',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        },
      }}
    >
      <TextField
        value={vacancy.dateCreated}
        onChange={handleInputChange}
        fullWidth
        size="small"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        label="Created At"
        name="dateCreated"
        type="date"
      />
      <TextField
        value={vacancy.description}
        onChange={handleInputChange}
        fullWidth
        size="small"
        variant="outlined"
        label="Description"
        name="description"
      />
      <RadioInput onChange={handleInputChange} />

      <ListContainer>
        <div className="list-title">
          <Button
            color="success"
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenRequirementModal}
          >
            Add
          </Button>
          <Typography>Requirement</Typography>
        </div>
        <div className="list-container">{renderRequirement()}</div>
      </ListContainer>

      <ListContainer>
        <div className="list-title">
          <Button
            color="success"
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenRoleOpenModal}
          >
            Add
          </Button>
          <Typography>Role Open :</Typography>
        </div>
        <div className="list-container">{renderRoleOpen()}</div>
      </ListContainer>

      <AddRequirementModal
        open={openRequirementModal}
        handleClose={handleCloseRequirementModal}
        handleAddRequirement={handleListedInputAdd}
      />

      <AddRoleOpenModal
        open={openRoleOpenModal}
        handleClose={handleCloseRoleOpenModal}
        handleAddRoleOpen={handleListedInputAdd}
      />

      <div className="button-container">
        <Button onClick={handleSaveCliked} variant="contained">
          Save
        </Button>
        <Button
          onClick={handleResetDataVacancy}
          variant="contained"
          color="secondary"
        >
          Clear
        </Button>
      </div>
    </CommonModal>
  );
};

export default AddVacancyModal;
