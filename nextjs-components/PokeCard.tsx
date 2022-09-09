import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import {
    shadows,
    borders,
} from '@mui/system';

type PokeCardProps = {
    card: {
        name: string;
        imageUrl: string;
        flavour: string;
    }
    
};

export const PokeCard = ({
    card,
}: PokeCardProps): JSX.Element => {
    return (
        <Box sx={{padding: "20px", width: "fit-content", display: "block", margin: "auto"}}>
            <Box sx={{ boxShadow: 8, borderRadius: 3, height: "100%", overflow: "hidden", display: "flex", padding: "10px"}}>
                <Stack sx={{padding: "10px", justifyContent: "center"}}>
                    <h2 text-align="center" style={{margin: "auto"}}>
                        {card.name}
                    </h2>
                    <img
                        alt={card.name}
                        src={card.imageUrl}
                    />
                    <p>
                        {card.flavour}
                    </p>
                </Stack>
            </Box>
        </Box>

        )
}