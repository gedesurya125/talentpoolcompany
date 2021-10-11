import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerContent from "./DrawerContent";
import * as appColor from "../../settings/appColor";
import { Avatar } from "@mui/material";
import AddTalentModal from "../modal/addTalentModal/AddTalentModal";
import AddPicModal from "../modal/addPicModal/AddPicModal";
import UserMenu from "./UserMenu";
import type { AppModal } from "./UserMenu";
import AddCompanyModal from "../modal/addCompanyModal/AddCompanyModal";

const drawerWidth = 240;

// type Props = {
//   children?: React.ReactNode;
// }

interface Props {
  children?: React.ReactNode;
}

const AppLayout = (props: Props) => {
  // const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const [modalOpen, setModalOpen] = React.useState({
    addTalentModal: false,
    addPicModal: false,
    addCompanyModal: false,
  });
  // type AppModal = "addUserModal" | "addPicModal" | "addCompanyModal";

  const handleOpenModal = (modal: AppModal) => {
    setModalOpen((state) => ({
      ...state,
      [modal]: true,
    }));
  };

  const handleCloseModal = (modal: AppModal) => {
    setModalOpen((state) => ({
      ...state,
      [modal]: false,
    }));
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
            sx={{
              // cursor: 'pointer',
              "& .user-detail": {
                display: {
                  xs: "none",
                  md: "block",
                },
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
              }}
              onClick={handleMenuOpen}
            >
              <Avatar sx={{ marginRight: 1 }} />
              <div className="user-detail">
                <Typography variant="h6" noWrap component="div">
                  Administrator
                </Typography>
                <Typography noWrap>admin@careerchain.com</Typography>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: appColor.backgroundColor.primary,
              border: "none",
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: appColor.backgroundColor.primary,
              // boxShadow: "3px 0px 5px 3px black",
              border: "none",
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , height: 'auto'}}>
        <Toolbar />
        {props.children}
      </Box>
      <AddTalentModal
        open={modalOpen.addTalentModal}
        handleClose={() => handleCloseModal("addTalentModal")}
      />
      <AddPicModal
        open={modalOpen.addPicModal}
        handleClose={() => handleCloseModal("addPicModal")}
      />
      <AddCompanyModal
        open={modalOpen.addCompanyModal}
        handleClose={() => handleCloseModal("addCompanyModal")}
      />

      <UserMenu
        anchorEl={anchorEl}
        handleClose={handleMenuClose}
        handleOpenModal={handleOpenModal}
      />
    </Box>
  );
};

export default AppLayout;
