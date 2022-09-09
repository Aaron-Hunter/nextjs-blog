import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import {
    shadows,
    borders,
} from '@mui/system';
import Image from 'next/image';

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
        <Box sx={{ boxShadow: 20, borderRadius: 3, maxWidth: "800px", height: "100%", overflow: "hidden", display: "flex", margin: "30px", position: "relative" }}>
            <Stack>
                <div style={{maxWidth: "800px", maxHeight: "800px", display: "block"}}>
                    <Image
                        alt={title}
                        src={imageUrl}
                        className="hobby-card-image"
                        layout="responsive"
                        width="3000px"
                        height="3000px"
                    />
                    </div>

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