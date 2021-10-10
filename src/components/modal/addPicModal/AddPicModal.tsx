import React, { useState } from "react";
import CommonModal from "../commonMoal/CommonModal";
import { styled } from "@mui/material/styles";
import { TextField, Button, CircularProgress } from "@mui/material";
import { PicData } from "../../../redux/apis/picAPI";
import { defaultUserPhoto } from "../../../settings/defaultResources";
import ImageInput from "../../commons/ImageInput";
import { useDispatch, useSelector } from "react-redux";
import { createPicAction } from "../../../redux/actions/picAction";
import { RootState } from "../../../redux/rootReducer";


const AddPicContainer = styled("div")(({ theme }) => ({
  '& .MuiFormControl-root':{
    marginTop: '1em'
  },
  '& .button-container':{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    margin: '1em'
  }
}));

interface Props {
  open: boolean;
  handleClose: () => void;
}


const AddPicModal = ({ open, handleClose }: Props) => {
  const pic = useSelector((state:RootState) => state.pic);
  const dispatch = useDispatch();
  const [Pic, setPic] = useState<PicData>({
    username: "",
    fullname: "",
    photo: defaultUserPhoto,
    address: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPic((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPic((state) => ({
      ...state,
      photo: (e.target.files && e.target.files[0]) || defaultUserPhoto,
    }));
  };

  const handleSave = () => {
    // console.log('DATA TO SENT', {
    //   ...Pic,
    //   photo: defaultUserPhoto
    // })
    dispatch(createPicAction({
      ...Pic,
      photo: defaultUserPhoto
    }, handleClose));
    // handleClose();
  }

  const handleClear = () => {
    setPic((state) => ({
      username: "",
      fullname: "",
      photo: defaultUserPhoto,
      address: "",
    }));
  };
  return (
    <CommonModal open={open} title={"Add PIC"} handleClose={handleClose}>
      <ImageInput value={Pic.photo} onChange={handlePhotoChange} />
      <AddPicContainer>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Username"
          name="username"
          value={Pic.username}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Full Name"
          name="fullname"
          value={Pic.fullname}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Address"
          name="address"
          value={Pic.address}
          onChange={handleInputChange}
        />
        <div className="button-container">
          <Button startIcon={pic.loading && <CircularProgress size={15} color="warning"/>} onClick={handleSave} size="small" variant="contained">
            Save
          </Button>
          <Button onClick={handleClear} size="small" variant="contained" color="secondary">
            Clear
          </Button>
        </div>
      </AddPicContainer>
    </CommonModal>
  );
};

export default AddPicModal;
