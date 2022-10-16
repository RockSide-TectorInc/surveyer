import {Box, List, Modal, ModalProps} from '@mui/material';
import React from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type AppModalProps = { setOpen: (state: boolean) => void } & ModalProps;

const AppModal = ({children, open, setOpen}: AppModalProps) => {
    const handleClose = () => setOpen(false);
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <List disablePadding sx={{width: "100%"}}>
                    {children}
                </List>
            </Box>
        </Modal>
    );
};

export default AppModal;