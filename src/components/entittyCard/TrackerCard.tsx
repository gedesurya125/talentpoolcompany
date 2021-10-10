import * as React from "react";
import { styled } from "@mui/material/styles";
import * as appColor from "../../settings/appColor";
import { Divider, Typography, Box } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import HomeIcon from "@mui/icons-material/Home";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { posStyle } from "./commonStyle";
// import BusinessIcon from "@mui/icons-material/Business";
import { selectStatusColor } from "../../functions/selectStatusColor";
import type { trackerStatus } from "../../functions/selectStatusColor";
import MasonryItem from "@mui/lab/MasonryItem";
import { selectPhotoSource } from "../../functions/photoSource";
import { baseURL } from "../../redux/apis/setupAPI";

const CardContainer = styled("div")(({ theme }) => ({
  ...posStyle,
  width: "100%",

  marginTop: 0,
  background: appColor.backgroundColor.primary,
  overflow: "hidden",
  // cursor: "pointer",
}));

const UserContainer = styled("div")(({ theme }) => ({
  // height: "100px",
  // width: '100%',
  // marginBottom: "0.5em",
  // ...posStyle,
  // marginTop: 0,
  background: appColor.backgroundColor.dark,
  marginLeft: "-10px",
  marginRight: "-10px",
  marginTop: "-10px",
  padding: "10px",
  borderRadius: "3px 3px 0 0",

  position: "relative",
  // cursor: "pointer",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  "& .user-photo": {
    // width: "60px",
    lineHeight: "0",
    "& img": {
      // width: "100%",
      width: "60px",
      height: "60px",
      objectFit: 'cover',
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

const InfoTracker = styled("div")(({ theme }) => ({
  marginTop: "0.5em",
  "& .error-color": {
    color: "red",
  },
  "& .company": {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
    "& .company-photo": {
      width: "40px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      "& img": {
        width: "100%",
        display: "block",
        borderRadius: "10px",
      },
    },
  },
}));

interface Props {
  tracker: {
    talents: any;
    companies: any;
    pics: any;
    status: trackerStatus;
  };
}

const TrackerCard = ({ tracker }: Props) => {
  const { talents, companies, pics, status } = tracker;

  const userDetail = [
    {
      Icon: FaceIcon,
      text: talents?.fullname || "anonymous",
    },
    {
      Icon: HomeIcon,
      text: talents?.address || "anonymous",
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

  const renderCompanyData = () => {
    if (!Boolean(companies)) {
      //if no companies
      return <div className="error-color">NO COMPANY LINKED</div>;
    } else {
      return (
        <div className="company">
          <div className="company-photo">
            <img src={selectPhotoSource(companies.photo, baseURL)} alt="..." />
          </div>
          <div className="company-details">
            <Typography>{`${companies.name} - ${companies.address}`}</Typography>
            <Typography>{companies.website}</Typography>
          </div>
        </div>
      );
    }
  };

  const renderPicData = () => {
    if (!Boolean(pics)) {
      return <div className="error-color">NO PIC LINKED</div>;
    } else {
      return (
        <div className="company">
          <div className="company-photo">
            <img src={selectPhotoSource(pics.photo, baseURL)} alt="..." />
          </div>
          <div className="company-details">
            <Typography>{`${pics.fullname}`}</Typography>
            <Typography></Typography>
            <Typography>{pics.address}</Typography>
          </div>
        </div>
      );
    }
  };
  return (
    <MasonryItem>
      <Box>
        <CardContainer>
          <UserContainer>
            <div className="user-photo">
              <img src={selectPhotoSource(talents?.photo, baseURL)} alt="..." />
            </div>
            <div className="user-detail">{renderUserDetail}</div>
          </UserContainer>
          <InfoTracker>
            <Typography variant="h6" align="center">
              Tracker Info
            </Typography>
            <Typography fontWeight="bold">Company :</Typography>
            {renderCompanyData()}
            <Divider />

            <Typography fontWeight="bold">PIC :</Typography>
            {renderPicData()}
            <Divider />

            <Typography fontWeight="bold">Status:</Typography>
            <Typography
              align="center"
              sx={{
                display: "block",
                padding: 1,
                backgroundColor: selectStatusColor(status),
                borderRadius: "5px",
              }}
            >
              {status}
            </Typography>
          </InfoTracker>
        </CardContainer>
      </Box>
    </MasonryItem>
  );
};

export default TrackerCard;
