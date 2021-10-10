import { Button, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CommonModal from "../commonMoal/CommonModal";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageInput from "../../commons/ImageInput";
import ListCard from "./ListCard";
import AddIcon from "@mui/icons-material/Add";
import ExperienceListCard from "./ExperienceListCard";
import AddEducationModal from "./AddEducationModal";
import AddExperienceModal from "./AddExperienceModal";
import {useDispatch, useSelector} from 'react-redux';
import { createTalentAction } from "../../../redux/actions/talentAction";
import { RootState } from "../../../redux/rootReducer";


// import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required("username is required"),
//   fullname: Yup.string().required("fullname is required"),
//   address: Yup.string().required("address is required"),
//   phone: Yup.string().required("phone is required"),
// });

const TalentFormContainer = styled("div")(({ theme }) => ({
  padding: "10px",
  "& .MuiFormControl-root": {
    marginTop: "1em",
  },
  "& .button-container": {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
}));

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

interface Props {
  open: boolean;
  handleClose: () => void;
}

export type education = string;
export type experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
};

const AddTalentModal = ({ open, handleClose }: Props) => {
  const [openAddEducationModal, setOpenAddEducationModal] = useState(false);
  const [openAddExperienceModal, setOpenAddExperienceModal] = useState(false);
  const dispatch = useDispatch();
  const talent = useSelector((state:RootState) => state.talent)

  const handleOpenEducationModal = () => {
    setOpenAddEducationModal(true);
  };
  const handleCloseEducationModal = () => {
    setOpenAddEducationModal(false);
  };

  const handleOpenExperienceModal = () => {
    setOpenAddExperienceModal(true)
  }
  const handleCloseExperienceModal = () => {
    setOpenAddExperienceModal(false)
  }
  const initialTalentState = {
    photo: "https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1",
    username: "",
    fullname: "",
    address: "",
    phone: "",
    education: [],
    experience: [],
  }
  const [talentData, setTalentData] = useState(initialTalentState);





  //HANDLE POST DATA TALENTS TO SERVER ==========================
  const handleCreateTalent = () => {
    dispatch(createTalentAction({
      ...talentData,
      photo: "https://i1.wp.com/jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png?fit=300%2C300&ssl=1"
    },() => handleClose()));
  }

  const handleResetDataTalent = () => {
    setTalentData(initialTalentState);
  }





  //=============================================================

  const handleListedInputAdd = (key: string, data: education | experience) => {
    setTalentData((state: any) => ({
      ...state,
      [key]: [...state[key], data],
    }));
  };

  const handleEducationDelete = (education: education) => {
    const newEducation = talentData.education.filter(
      (edu: string) => edu !== education
    );
    setTalentData((state: any) => ({
      ...state,
      education: newEducation,
    }));
  };

  const handleExperienceDelete = (experience: experience) => {
    const newExperience = talentData.experience.filter(
      (exp: experience) =>
        exp.company !== experience.company && exp.role !== experience.role
    );

    setTalentData((state: any) => ({
      ...state,
      experience: newExperience,
    }));
  };

  const handlePhotoChange = (e: any) => {
    // console.log("PHOTO CHANGE", e.target.files[0]);
    setTalentData((state: any) => ({
      ...state,
      photo: e.target.files[0],
    }));
  };

  const handleGenericInputChange = (e: any) => {
    setTalentData((state: any) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  //RENDERING DATA ============================
  const renderEducation = () => {
    if (talentData.education.length === 0) return null;
    return talentData.education.map((edu: string, index: number) => (
      <ListCard key={index} text={edu} handleEducationDelete={handleEducationDelete}/>
    ));
  };

  const renderExperience = () => {
    if (talentData.experience.length === 0) return null;
    return talentData.experience.map((exp: any, index: number) => (
      <ExperienceListCard key={index} {...exp} handleDelete={handleExperienceDelete}/>
    ));
  };
  //===========================================
  return (
    <CommonModal open={open} handleClose={handleClose} title={"Add Talent"}>
      <TalentFormContainer>
        <ImageInput
          value={talentData.photo}
          onChange={handlePhotoChange}
          sx={undefined}
        />
        <TextField
          value={talentData.username}
          onChange={handleGenericInputChange}
          variant="outlined"
          size="small"
          label="User Name"
          fullWidth
          name="username"
        />
        <TextField
          value={talentData.fullname}
          onChange={handleGenericInputChange}
          variant="outlined"
          size="small"
          label="Full Name"
          fullWidth
          name="fullname"
        />
        <TextField
          value={talentData.address}
          onChange={handleGenericInputChange}
          variant="outlined"
          size="small"
          label="Address"
          fullWidth
          name="address"
        />
        <TextField
          value={talentData.phone}
          onChange={handleGenericInputChange}
          variant="outlined"
          size="small"
          label="Phone"
          fullWidth
          name="phone"
        />
        <ListContainer>
          <div className="list-title">
            <Button
              color="success"
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenEducationModal}
            >
              Add
            </Button>
            <Typography>Education</Typography>
          </div>
          <div className="list-container">{renderEducation()}</div>
        </ListContainer>
        <ListContainer>
          <div className="list-title">
            <Button
              color="success"
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenExperienceModal}
            >
              Add
            </Button>
            <Typography>Experience</Typography>
          </div>
          <div className="list-container">{renderExperience()}</div>
        </ListContainer>
        <div className="button-container">
          <Button startIcon={talent.loading && <CircularProgress color="warning" size={20}/>} onClick={handleCreateTalent} variant="contained">Save</Button>
          <Button onClick={handleResetDataTalent} variant="contained" color="secondary">
            Clear
          </Button>
        </div>
      </TalentFormContainer>

      <AddEducationModal
        open={openAddEducationModal}
        handleClose={handleCloseEducationModal}
        handleAddEducation={handleListedInputAdd}
      />
      <AddExperienceModal open={openAddExperienceModal} handleClose={handleCloseExperienceModal} handleListedInputAdd={handleListedInputAdd}/>
    </CommonModal>
  );
};
export default AddTalentModal;
