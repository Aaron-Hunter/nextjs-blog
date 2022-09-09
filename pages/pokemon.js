import React from 'react';
import {
    Box,
    Stack,
} from '@mui/material';
import { Header } from '../nextjs-components/Header';
import { SpriteRow } from '../nextjs-components/SpriteRow';
import { PokeCarousel } from '../nextjs-components/PokeCarousel';
import Head from 'next/head';

const pokeTeam = [
    {
        name: 'Charizard',
        imageUrl: './sprite6.png',
    },
    {
        name: 'Gyarados',
        imageUrl: './sprite130.png',
    },
    {
        name: 'Arcanine',
        imageUrl: './sprite59.png',
    },
    {
        name: 'Arbok',
        imageUrl: './sprite24.png',
    },
    {
        name: 'Fearow',
        imageUrl: './sprite22.png',
    },
    {
        name: 'Weezing',
        imageUrl: './sprite110.png',
    }
]

const pokeCards = [
    {
        name: "Charizard",
        imageUrl: "/artwork6.png",
        flavour: "Spits fire that\nis hot enough to\nmelt boulders. \u000cKnown to cause\nforest fires\nunintentionally.",
    },
    {
        name: "Gyarados",
        imageUrl: "/artwork130.png",
        flavour: "Once it begins to rampage, a\nGYARADOS will burn everything\ndown, even in a harsh storm.",
    },
    {
        name: "Arcanine",
        imageUrl: "/artwork59.png",
        flavour: "A POKEMON that\nhas been admired\nsince the past \u000cfor its beauty.\nIt runs agilely\nas if on wings.",
    },
    {
        name: "Arbok",
        imageUrl: "/artwork24.png",
        flavour: "It is rumored that\nthe ferocious\nwarning markings \u000con its belly\ndiffer from area\nto area.",
    },
    {
        name: "Fearow",
        imageUrl: "/artwork22.png",
        flavour: "With its huge and\nmagnificent wings,\nit can keep aloft \u000cwithout ever\nhaving to land\nfor rest.",
    },
    {
        name: "Weezing",
        imageUrl: "/artwork110.png",
        flavour: "Where two kinds\nof poison gases\nmeet, 2 KOFFINGs \u000ccan fuse into a\nWEEZING over many\nyears.",
    },
]

export default function Hobbies() {
    return (
        <Stack sx={{ display: "flex" }}>

            <Head>
                <title>My Pokemon Team</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Stack direction="column" sx={{ display: "flex", justifyContent: "center" }}>
                <Box marginLeft="auto" marginRight="auto">
                    <h1 text-align="center">My Pokemon Team</h1>
                </Box>
                <SpriteRow sprites={pokeTeam}></SpriteRow>
                <PokeCarousel cards={pokeCards}></PokeCarousel>
            </Stack>
        </Stack>
    );
}