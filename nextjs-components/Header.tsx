import React from 'react';
import {
    Box,
    Typography,
    Button,
    ButtonGroup,
} from '@mui/material';
import {
    display,
} from '@mui/system';
import {
    createTheme,
} from '@mui/material/styles';
import { Hamburger } from '../nextjs-components/Hamburger';
import NextLink from 'next/link';

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#87cefa",
        },
        secondary: {
            main: "#0f4880",
        },
    }
})

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

export const Header = (): JSX.Element => {
    return (
            <Box
                display="flex"
                justifyContent="space-between"
                padding="10px"
                bgcolor="#87cefa"
            >
                <Typography variant="h4" component="h4" color="secondary">A Blog-Thing</Typography>

                <ButtonGroup variant="text" aria-label="page links" color="secondary" sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
                {links.map((link, i) => (
                        <NextLink href={link.path} passHref key={i}>
                            <Button sx={{ marginLeft: "10px", paddingRight: "18px", fontWeight: "bold" }}>
                                {link.name}
                            </Button>
                        </NextLink>
                    ))}
                </ButtonGroup>

                <Box sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" } }} >
                    <Hamburger onRegisterClick={() => { }}></Hamburger>

                </Box>
            </Box>
    );
}