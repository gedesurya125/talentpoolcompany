import * as React from "react";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";
import { Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { posStyle } from "./commonStyle";

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
  background: appColor.backgroundColor.primary,
  position: "relative",
  cursor: "pointer",
  display: "flex",
  gap: "10px",
  alignItems: "center",
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
  nickName: string;
  photo: any;
  address: string;
  phone: string;
}

const TalentsCard = ({ nickName, photo, address, phone }: Props) => {
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
        <img src={photo} alt="..." />
      </div>
      <div className="user-detail">{renderUserDetail}</div>
    </CardContainer>
  );
};

export default TalentsCard;
