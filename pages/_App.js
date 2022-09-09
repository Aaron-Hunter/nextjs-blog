import NextHead from 'next/head';
import { AppProps } from 'next/App';
import { Header } from '../components/Header';
import {
    Box,
    Stack
} from '@mui/materials';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Box>
            <NextHead>
                <title>A Blog-Thing</title>
                <link rel="icon" href="/favicon.ico" />
            </NextHead>

            <Stack direction="column" display="flex">
                <Header />

                <Box marginTop="100px" flexGrow="1">
                    <Component {...pageProps} />
                </Box>
            </Stack>
        </Box>
    )
}