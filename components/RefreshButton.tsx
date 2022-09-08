import React from 'react';
import {
    Button,
} from '@mui/material';

interface RefreshButtonProps {
    text: string,
    onClick: () => void,
}

export const RefreshButton = ({
    text,
    onClick,
}: RefreshButtonProps) => {
    return (
        <Button
            variant="contained"
            onClick={() => { onClick() }}
        >
            {text}
        </Button>
    );
}