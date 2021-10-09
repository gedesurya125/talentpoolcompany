import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import AppLogo from "../image/AppLogo";
import * as appColor from "../../settings/appColor";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const DrawerButton = [
  {
    text: "Dashboard",
    Icon: DashboardIcon,
    routeName: "/",
    routeTarget: "/",
  },
  {
    text: "Talents",
    Icon: PeopleIcon,
    routeName: "/talent",
    routeTarget: "/talent",
  },
  {
    text: "PIC",
    Icon: AssignmentIndIcon,
    routeName: "/pic",
    routeTarget: "/pic",
  },
  {
    text: "Company",
    Icon: BusinessIcon,
    routeName: "/company",
    routeTarget: "/company",
  },
  {
    text: "Tracker",
    Icon: GpsFixedIcon,
    routeName: "/tracker",
    routeTarget: "/tracker",
  },
];

const DrawerContent = () => {
  const history = useHistory();
  const location = useLocation();
  // console.log('INI PATHNYA', location.pathname);

  const handleDrawerButtonClick = (routeTarget: string) => {
    // console.log('ROUTE TARGE', routeTarget)
    history.push(routeTarget);
  };

  const getActiveButtonStyle = (isActive: boolean) => {
    if (isActive)
      return {
        backgroundColor: "#121212",
        paddingLeft: "9px",
        "& .MuiButtonBase-root": {
          backgroundColor: appColor.backgroundColor.primary,
        },
        // borderRadius: "10px 0 0 10px",
        "&:hover": {
          backgroundColor: "#121212",
        },
      };
    return {};
  };

  return (
    <div>
      <Toolbar
        sx={
          {
            // background: appColor.backgroundColor.secondary
          }
        }
      >
        <AppLogo />
      </Toolbar>
      <Divider />
      <List>
        {DrawerButton.map((btn) => {
          return (
            <ListItem
              button
              // disableGutters
              key={btn.text}
              onClick={() => handleDrawerButtonClick(btn.routeTarget)}
              sx={{
                borderRadius: "30px 0 0 30px",
                ...getActiveButtonStyle(location.pathname === btn.routeName),
              }}
            >
              <ListItemIcon>
                <IconButton
                  sx={{
                    margin: "none",
                  }}
                >
                  <btn.Icon />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary={btn.text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default DrawerContent;
