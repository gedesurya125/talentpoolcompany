import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type AppModal = "addTalentModal" | "addPicModal" | "addCompanyModal";

interface MenuIterface {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  handleOpenModal: (modal: AppModal) => void;

}

const UserMenu = ({anchorEl, handleClose, handleOpenModal}: MenuIterface) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={() => handleOpenModal("addTalentModal")}>Add Talents</MenuItem>
      <MenuItem onClick={() => handleOpenModal("addPicModal")}>Add PIC</MenuItem>
      <MenuItem onClick={() => handleOpenModal("addCompanyModal")}>Add Company</MenuItem>
    </Menu>
  );
};

export default UserMenu;
