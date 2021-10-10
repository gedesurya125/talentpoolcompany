import * as React from 'react';
import Modal from '@mui/material/Modal';
// import {styled} from '@mui/material/styles'
import { IconButton, Typography } from '@mui/material';
import { CommonModalRoot } from './CommonModalStyle';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  title: string;
  handleClose: () => void;
  children?: any;
  sx?: any;
}
const CommonModal = ({open, title, handleClose, children, sx}: Props) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        sx={{
          overflowY: 'scroll',
          // padding: '30px',
          // marginBottom: '30px'
          height: '100vh'
        }}
      >
        <CommonModalRoot sx={{...sx}}>
          <div className="modal-title">
            <Typography variant="h5" fontWeight="bold">{title}</Typography>
            <IconButton sx={{marginLeft: 'auto'}} onClick={handleClose}><CloseIcon/></IconButton>
          </div>
          <div>
            {children}
          </div>
        </CommonModalRoot>
      </Modal>
    </div>
  );
}

export default CommonModal
