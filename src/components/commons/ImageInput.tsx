import React from "react";
import { selectPhotoSource } from "../../functions/photoSource";
import { styled } from "@mui/material/styles";
import AddAPhotoIcon from "@mui/icons-material/AddToPhotos";
import { Typography } from "@mui/material";
import { baseURL } from "../../redux/apis/setupAPI";
// import * as appColor from "../../settings/appColor";

const ImageIputContainer = styled("div")(({ theme }) => ({
  height: "150px",
  width: "150px",
  borderRadius: "10px",
  backgroundColor: 'hsla(4, 0%, 61%, 1)',
  margin: "1em auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.5s ease",
  position: 'relative',
  overflow: 'hidden',
  "&:hover": {
    backgroundColor: 'hsla(4, 0%, 40%, 1)',
  },
  '& label':{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img':{
      width: '100%',
      display: "block",
      objectFit: 'cover'
    },
    '& .image-cover':{
      position: 'absolute',
      backgroundColor: 'black',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: '0.1',
      cursor: 'pointer',
      transition: 'all 0.5s ease',
      '&:hover':{
        opacity: '0.5'
      }
    }
  }
}));

interface Props {
  value: any;
  onChange: (e:any) => void;
  sx?: any;
}

const ImageInput = ({ value, onChange, sx }: Props) => {
  const renderPhoto = (value: any) => {
    if (value) {
      return (
        <>
          <img src={selectPhotoSource(value, baseURL)} alt="..." />
          <div className="image-cover">
            <div style={{ textAlign: "center" }}>
              <AddAPhotoIcon />
              <Typography variant="body1">Change Picture</Typography>
            </div>
          </div>
        </>
      );
    } else {
      return <AddAPhotoIcon />;
    }
  };
  return (
    <ImageIputContainer>
      <label htmlFor="image-input">{renderPhoto(value)}</label>
      <input
        accept="image/*"
        type="file"
        id="image-input"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </ImageIputContainer>
  );
};

export default ImageInput;
