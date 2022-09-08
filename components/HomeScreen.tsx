import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import {borders} from '@mui/system';
import { Header } from './Header';

export const HomeScreen = (): JSX.Element => {
    return (
        <Stack sx={{display: "flex"}}>
            <Header />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction="column" sx={{ display: "flex", justifyContent: "center" }}>
                <Box margin="auto">
                <h1 text-align="center">Home</h1>
                </Box>
                <Stack direction={{ xs: "column", sm: "column", md: "column", lg: "row", xl: "row" }} sx={{ padding: "10px", justifyContent: "center", display: "flex" }}>
                    <Stack direction="row" sx={{justifyContent: "center", display: "flex"}}>
                        <Box sx={{ maxWidth: "400px", maxHeight: "400px", margin: "20px", borderRadius: 6, overflow: "hidden" }}>
                            <img
                                alt="portrait"
                                src="/portrait.jpg"
                            />
                        </Box>
                    </Stack>
                    <Box sx={{ padding: "20px", maxWidth: "800px" }}>
                        <Stack>
                            <p>
                                This is a prototype.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet. Ad excepturi voluptatem sed recusandae laudantium ad accusantium neque. Aut repellendus totam ad provident asperiores aut ipsum excepturi aut autem omnis!
                            </p>
                            <p>
                                Sit natus repudiandae quo aspernatur internos ea obcaecati sunt eos minus galisum aut molestiae necessitatibus eum provident enim sed dolorum veritatis. Qui reprehenderit voluptas ab tempora laborum quo dolor accusantium et asperiores quam et libero autem non molestias possimus? Et iste earum ut assumenda facere in deserunt pariatur At neque dolores et sunt quia.
                            </p>
                        </Stack>
                    </Box>
                </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}
