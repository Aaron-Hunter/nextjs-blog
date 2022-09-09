import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import { Header } from '../nextjs-components/Header';
import { HobbyCard } from '../nextjs-components/HobbyCard';
import Head from 'next/head';

export default function Hobbies() {
    return (
        <Stack sx={{ display: "flex" }}>

            <Head>
                <title>My Hobbies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Stack direction="column" sx={{ display: "flex", justifyContent: "center" }}>
                <Box marginLeft="auto" marginRight="auto">
                    <h1 text-align="center" style={{ marginBottom: "0px" }}>My Hobbies</h1>
                </Box>
                <Box marginLeft="auto" marginRight="auto" >
                    <h4 text-align="center">Actually just things I like</h4>
                </Box>
                <Stack direction="column" sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                    <HobbyCard
                        title='Cooking'
                        imageUrl='/burger.jpg'
                    >
                        <p>Sit natus repudiandae quo aspernatur internos ea obcaecati sunt eos minus galisum aut molestiae necessitatibus eum provident enim sed dolorum veritatis. Qui reprehenderit voluptas ab tempora laborum quo dolor accusantium et asperiores quam et libero autem non molestias possimus? Et iste earum ut assumenda facere in deserunt pariatur At neque dolores et sunt quia.</p>
                        <p>Aut aliquam cupiditate ut autem earum ut distinctio dolor est aspernatur consequatur cum fugit neque ad eaque molestias! Id possimus labore ut quia doloribus est porro laborum et voluptas suscipit veniam vel officia harum quo voluptas tenetur. Cum consequatur quia et recusandae accusantium et laboriosam voluptatem aut dignissimos molestias ab obcaecati unde est aliquam voluptatem. Ex incidunt voluptatem et soluta sapiente At soluta nihil est ullam veniam.</p>
                    </HobbyCard>
                    <HobbyCard
                        title='Hiking'
                        imageUrl='/hiking.jpg'
                    >
                        <p>Aut aliquam cupiditate ut autem earum ut distinctio dolor est aspernatur consequatur cum fugit neque ad eaque molestias! Id possimus labore ut quia doloribus est porro laborum et voluptas suscipit veniam vel officia harum quo voluptas tenetur. Cum consequatur quia et recusandae accusantium et laboriosam voluptatem aut dignissimos molestias ab obcaecati unde est aliquam voluptatem. Ex incidunt voluptatem et soluta sapiente At soluta nihil est ullam veniam.</p>
                    </HobbyCard>
                    <HobbyCard
                        title='Dessert'
                        imageUrl='/dessert.jpg'
                    >
                        <p>Sit natus repudiandae quo aspernatur internos ea obcaecati sunt eos minus galisum aut molestiae necessitatibus eum provident enim sed dolorum veritatis. Qui reprehenderit voluptas ab tempora laborum quo dolor accusantium et asperiores quam et libero autem non molestias possimus? Et iste earum ut assumenda facere in deserunt pariatur At neque dolores et sunt quia.</p>
                        <p>Aut aliquam cupiditate ut autem earum ut distinctio dolor est aspernatur consequatur cum fugit neque ad eaque molestias! Id possimus labore ut quia doloribus est porro laborum et voluptas suscipit veniam vel officia harum quo voluptas tenetur. Cum consequatur quia et recusandae accusantium et laboriosam voluptatem aut dignissimos molestias ab obcaecati unde est aliquam voluptatem. Ex incidunt voluptatem et soluta sapiente At soluta nihil est ullam veniam.</p>
                    </HobbyCard>
                    <HobbyCard
                        title='Friends'
                        imageUrl='/friends.jpg'
                    >
                        <p>Sit natus repudiandae quo aspernatur internos ea obcaecati sunt eos minus galisum aut molestiae necessitatibus eum provident enim sed dolorum veritatis. Qui reprehenderit voluptas ab tempora laborum quo dolor accusantium et asperiores quam et libero autem non molestias possimus? Et iste earum ut assumenda facere in deserunt pariatur At neque dolores et sunt quia.</p>
                    </HobbyCard>
                </Stack>
            </Stack>
        </Stack>
    );
}