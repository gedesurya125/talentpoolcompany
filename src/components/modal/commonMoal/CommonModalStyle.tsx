import { styled } from "@mui/material/styles";
import * as appColor from "../../../settings/appColor";

export const CommonModalRoot = styled("div")(({ theme }) => ({
  position: "absolute",
  // top: '10px',
  marginTop: "20px",
  marginBottom: "200px",
  // bottom: '20px',
  left: "50%",
  // transform: 'translate(-50%, -50%)',
  transform: "translateX(-50%)",

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  backgroundColor: appColor.backgroundColor.dark,
  // border: '2px solid #000',
  borderRadius: "10px",
  // boxShadow: '2em',
  padding: "10px",
  overflow: "hidden",
  "& .modal-title": {
    marginLeft: "-10px",
    marginTop: "-10px",
    marginRight: "-10px",
    padding: "10px",
    display: "flex",
    backgroundColor: appColor.backgroundColor.primary,
  },
}));
