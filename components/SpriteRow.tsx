import React from 'react';
import {
    Stack,
} from '@mui/material';
import {
    styled,
} from '@mui/material/styles';
import {
    shadows,
    borders,
    display,
} from '@mui/system';
import './SpriteRow.css';

type Sprite = {
    name: string;
    imageUrl: string;
}

type SpriteRowProps = {
    sprites: Sprite[];
}

const SpriteBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.2),
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: theme.spacing(0.5),
    },
    [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(1),
    },
}));

const SpriteText = styled('h5')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
}))

export const SpriteRow = ({
    sprites,
}: SpriteRowProps): JSX.Element => {
    return (
        <Stack direction="row" sx={{flexDirection: "row", justifyContent: "center", maxWidth: "100%", height: "100%", padding: "0px"}}>
            {sprites.map((sprite, i) => (
                <Stack key={i} sx={{ maxWidth: "15%", height: "100%", display: "flex" }} padding={{xs: "2px", sm: "6px", md: "8px", lg: "16px", xl: "16px"}}>
                        <SpriteBox sx={{ boxShadow: 2, borderRadius: 20, maxWidth: "100%", height: "100%", overflow: "hidden", display: "flex" }}>
                            <img
                                alt={sprite.name}
                                src={sprite.imageUrl}
                                className='sprite'
                            />
                        </SpriteBox>

                        <SpriteText text-align="centre" sx={{ margin: 'auto', padding: '5px' }}>{sprite.name}</SpriteText>
                    </Stack>
            ))}
        </Stack>
    )
}