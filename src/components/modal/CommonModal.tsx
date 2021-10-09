import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  children: any;
}
const CommonModal = ({open, handleClose, children}: Props) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default CommonModal
