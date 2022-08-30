import React from 'react';
import { Box, Modal } from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:10,
    maxHeight:'80%',
    overflowX:'scroll'
};

const MODAL = ({ isOpen = false, children,handleModal }) => {
    return (
        <Modal
            open={isOpen}
            onClose={()=>handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
}

export default MODAL;