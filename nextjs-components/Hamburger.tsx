import React from 'react';
import {
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import { Menu as MenuButton } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import NextLink from 'next/link';

interface HamburgerProps {
    onRegisterClick: (text) => void,
}

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Hobbies',
        path: '/hobbies',
    },
    {
        name: 'Pokemon Team',
        path: '/pokemon',
    },
];

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
                        {links.map((link, i) => (
                            <NextLink href={link.path} key={i} passHref>
                                <MenuItem>{link.name}</MenuItem>
                            </NextLink>
                        ))}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}