import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { PokeCard } from '../nextjs-components/PokeCard';

type PokeCard = {
    name: string;
    imageUrl: string;
    flavour: string;
}

type PokeCarouselProps = {
    cards: PokeCard[];
}

export const PokeCarousel = ({
    cards
}: PokeCarouselProps): JSX.Element => {
    return (
        <Carousel
            autoPlay={false}
            indicators={false}
            animation="slide"
            duration={700}
            sx={{justifyContent: "center", display: "flex"}}
        >
            {
                cards.map((poke, i) => <PokeCard key={i} card={poke} /> )
            }
        </Carousel>
    )
}