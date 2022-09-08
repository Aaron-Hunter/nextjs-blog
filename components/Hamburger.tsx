import React from 'react';
import {
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import { Menu as MenuButton } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

interface HamburgerProps {
    onRegisterClick: (text) => void,
}

export const Hamburger = ({
    onRegisterClick,
}: HamburgerProps) => {
    return (
        <PopupState variant="popover" popupId="page-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button aria-label="Show menu" variant="contained" color="secondary" {...bindTrigger(popupState)} >
                        <MenuButton />
                    </Button>

                    <Menu
                        {...bindMenu(popupState)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem onClick={() => { onRegisterClick('Home') }}>Home</MenuItem>
                        <MenuItem onClick={() => { onRegisterClick('Hobbies') }}>Hobbies</MenuItem>
                        <MenuItem onClick={() => { onRegisterClick('Pokemon Team') }}>Pokemon Team</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}