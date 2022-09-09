import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import {
    shadows,
    borders,
} from '@mui/system';

type HobbyCardProps = {
    title: string;
    imageUrl: string;
    children: React.ReactNode;
};

export const HobbyCard = ({
    title,
    imageUrl,
    children,
}: HobbyCardProps): JSX.Element => {
    return (
        <Box sx={{ boxShadow: 20, borderRadius: 3, maxWidth: "800px", height: "100%", overflow: "hidden", display: "flex", margin: "30px" }}>
            <Stack>
                <img
                    alt={title}
                    src={imageUrl}
                    className="hobby-card-image"
                />

                <Stack padding="20px">
                    <h3>
                        {title}
                    </h3>

                    {children}
                </Stack>
            </Stack>
        </Box>
        );
}