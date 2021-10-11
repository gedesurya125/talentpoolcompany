import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Collapse, Box, IconButton } from "@mui/material";
import { posStyle } from "./commonStyle";
import * as appColor from "../../settings/appColor";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import MasonryItem from "@mui/lab/MasonryItem";
import VacancyDisplay from "./vacancyDisplay/VacancyDisplay";
import { selectPhotoSource } from "../../functions/photoSource";
import { baseURL } from "../../redux/apis/setupAPI";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import { removeCompanyAction } from "../../redux/actions/companyAction";


const CompanyCardContainer = styled("div")(({ theme }) => ({
  ...posStyle,
  marginTop: 0,
  // minHeight: "300px",
  width: "100%",
  backgroundColor: appColor.backgroundColor.primary,
  // padding: 0,
  // boxSizing: '',
  position: 'relative',
  "& .company-card-header": {
    // height: "100px",
    width: "100%",
    // objectFit: "cover",
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "0.5em",
    "& img": {
      width: "100%",
      height: "100px",

      display: "block",
      objectFit: "cover",
      // objectPosition: "center -140px",
    },
  },
  "& .company-card-content": {
    "& ul.company-card-details": {
      listStyle: "none",
      marginBlockStart: "0.5em",

      marginBlockEnd: "0",
      marginLeft: "1em",
      padding: 0,
      "& li": {
        display: "flex",
        gap: "10px",
      },
    },
  },
  "& .company-vacancy": {
    backgroundColor: "black",
    borderRadius: "4px",
    "& .vacancy-details": {
      padding: "10px",
    },
  },
}));

interface CompanyCardTypes {
  name: string;
  photo: any;
  address: string;
  phone: string;
  jobVacancy: any[];
  website: string;
  id:string
}
const CompanyCard = (props: CompanyCardTypes) => {
  const dispatch = useDispatch();
  const [openVacancy, setOpenVacancy] = React.useState(false);

  const toggleVacancy = () => {
    setOpenVacancy((state) => !state);
  };

  const handleRemoveCompany = () => {
    // console.log('COMPANY WITH ID WILL BE DELETED', props.id)
    dispatch(removeCompanyAction(props.id));
  }
  return (
    <MasonryItem>
      <Box>
        <CompanyCardContainer>
          <div className="company-card-header">
            <img src={selectPhotoSource(props.photo, baseURL)} alt="..." />
          </div>
          <div className="company-card-content">
            <Typography variant="h5" align="center" fontWeight="bold">
              {props.name}
            </Typography>
            <ul className="company-card-details">
              <li>
                <div className="details-icon">
                  <HomeIcon />
                </div>
                <Typography>{props.address}</Typography>
              </li>
              <li>
                <div className="details-icon">
                  <LocalPhoneIcon />
                </div>
                <Typography>{props.phone}</Typography>
              </li>
              <li>
                <div className="details-icon">
                  <LanguageIcon />
                </div>
                <Typography>{props.website}</Typography>
              </li>
            </ul>
          </div>
          <Collapse
            in={openVacancy}
            collapsedSize={36}
            className="company-vacancy"
          >
            <Button onClick={toggleVacancy} variant="contained" fullWidth>
              Show Vacancy
            </Button>
            <div className="vacancy-details">
              <VacancyDisplay jobVacancy={props.jobVacancy} />
            </div>
          </Collapse>
          <IconButton
            onClick={handleRemoveCompany}
            sx={{
              position: "absolute",
              top: "0px",
              right: "0px",
              padding: 0,
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        </CompanyCardContainer>
      </Box>
    </MasonryItem>
  );
};

export default CompanyCard;
