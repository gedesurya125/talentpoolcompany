//AFTER COPYING TALENTS CARD NOT USABLE YET

import * as React from "react";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";
import { IconButton, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { posStyle, lgPosStyle } from "./commonStyle";
import { selectPhotoSource } from "../../functions/photoSource";
import { baseURL } from "../../redux/apis/setupAPI";
import { useDispatch } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { removePicAction } from "../../redux/actions/picAction";

const CardContainer = styled("div")(({ theme }) => ({
  // height: "100px",
  ...posStyle,
  marginTop: 0,
  background: appColor.backgroundColor.primary,
  position: "relative",
  cursor: "pointer",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up('lg')]:{
    ...lgPosStyle
  },
  "& .user-photo": {
    width: "100px",
    lineHeight: "0",
    "& img": {
      width: "100%",
      borderRadius: "10px",
    },
  },
  "& .user-detail": {
    "& .user-detail-item": {
      display: "flex",
      alignItems: "center",
    },
    "& .user-detail-icon": {
      display: "flex",
      alignItems: "center",
      padding: "4px",
      background: appColor.backgroundColor.dark,
      borderRadius: "20px",
      marginRight: "10px",
    },
  },
  "& .user-status": {
    position: "absolute",
    top: "-10px",
    right: "0px",
    minWidth: "100px",
    height: "30px",
    paddng: "30px",
    background: "red",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {
  username: string;
  photo: any;
  address: string;
  fullname: string;
  id:string
}

const PicCard = ({ username, photo, address, fullname, id }: Props) => {
  const dispatch = useDispatch();
  const userDetail = [
    {
      Icon: FaceIcon,
      text: username,
    },
    {
      Icon: AccountBoxIcon,
      text: fullname,
    },
    {
      Icon: HomeIcon,
      text: address,
    },
  ];

  const handleRemovePic = () => {
    dispatch(removePicAction(id))
  }
  
  const renderUserDetail = userDetail.map((detail, index) => {
    return (
      <div key={index} className="user-detail-item">
        <div className="user-detail-icon">
          <detail.Icon />
        </div>
        <Typography>{detail.text}</Typography>
      </div>
    );
  });
  return (
    <CardContainer>
      <div className="user-photo">
        <img src={selectPhotoSource(photo, baseURL)} alt="..." />
      </div>
      <div className="user-detail">{renderUserDetail}</div>
      <IconButton
        onClick={handleRemovePic}
        sx={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          padding: 0,
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        <HighlightOffIcon />
      </IconButton>
    </CardContainer>
  );
};

export default PicCard;
