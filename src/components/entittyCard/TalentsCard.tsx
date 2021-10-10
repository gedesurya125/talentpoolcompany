import * as React from "react";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";
import { IconButton, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { posStyle, lgPosStyle } from "./commonStyle";
import { selectPhotoSource } from "../../functions/photoSource";
import { baseURL } from "../../redux/apis/setupAPI";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import { removeTalentAction } from "../../redux/actions/talentAction";
//This is common style for card. this requiere flex container
// export const posStyle = {
//   width: "32.7%",
//   borderRadius: "10px",
//   marginTop: "30px",
//   padding: "10px",

// }

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
    lineHeight: "0",
    overflow: "hidden",
    "& img": {
      width: "100px",
      height: "100px",
      // width: "100%",
      borderRadius: "10px",

      objectFit: "cover",
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
  id: string;
  nickName: string;
  photo: any;
  address: string;
  phone: string;
}

const TalentsCard = ({ id, nickName, photo, address, phone }: Props) => {
  const dispatch = useDispatch();
  const userDetail = [
    {
      Icon: FaceIcon,
      text: nickName,
    },
    {
      Icon: HomeIcon,
      text: address,
    },
    {
      Icon: LocalPhoneIcon,
      text: phone,
    },
  ];

  const handleRemoveTalent = () => {
    dispatch(removeTalentAction(id));
  };
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
        onClick={handleRemoveTalent}
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

export default TalentsCard;
