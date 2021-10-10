import * as React from "react";
import { styled } from "@mui/material/styles";
import sampleImage from "../../assets/img/background1.jpg";
import * as appColor from "../../settings/appColor";
import { Typography } from "@mui/material";

const CardContainer = styled("div")(({ theme }) => ({
  // height: "100px",
  width: "98%",
  [theme.breakpoints.up("sm")]: {
    // width: "48.5%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "32.2%",
  },
  borderRadius: "10px",
  position: "relative",
  marginTop: "30px",
  cursor: "pointer",
  transition: "all 1s ease",
  "& .card-img": {
    height: "20px",
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",

    "& img": {
      width: "100%",
      // objectFit: 'cover'
    },
  },
  "& .card-icon": {
    height: "80px",
    width: "80px",
    // backgroundColor: appColor.backgroundColor.primary,
    position: "absolute",
    top: "-30px",
    right: "10px",
    borderRadius: "10px",
    boxShadow: "3px 3px 12px white",
  },
  "& .card-container": {
    height: "100px",
    backgroundColor: appColor.backgroundColor.dark,
    borderRadius: "0 0 10px 10px",
    padding: "0.3em 1em 1em 1em",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: "hsl(200, 70%,20%)",
    },
    "& .card-body": {
      display: "flex",
      alignItems: "flex-end",
    },
  },
}));

interface Props {
  title: string;
  Icon: any;
  talents: number;
  color: string;
}

const StatusCard = ({ title, Icon, talents, color }: Props) => {
  return (
    <CardContainer>
      <div className="card-img">
        <img src={sampleImage} alt="..." />
      </div>
      <div className="card-icon" style={{ backgroundColor: color }}>
        <Icon sx={{ height: "100%", width: "100%", padding: "10px" }} />
      </div>
      <div className="card-container">
        <div className="card-header">
          <Typography variant="h5">{title}</Typography>
        </div>
        <div className="card-body">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            {talents}
          </Typography>
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            talents
          </Typography>
        </div>
      </div>
    </CardContainer>
  );
};

export default StatusCard;
