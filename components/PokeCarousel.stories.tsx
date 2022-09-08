import React from 'react';
import { PokeCarousel } from './PokeCarousel';

export default {
    component: PokeCarousel,
    title: 'PokeCarousel',
};

const Template = args => (
    <PokeCarousel {...args} />
)

export const Default = Template.bind({});
Default.args = {
    cards: [
        {
            name: "Fearow",
            imageUrl: "/artwork22.png",
            flavour: "With its huge and\nmagnificent wings,\nit can keep aloft \u000cwithout ever\nhaving to land\nfor rest.",
        },
        {
            name: "Arbok",
            imageUrl: "/artwork24.png",
            flavour: "It is rumored that\nthe ferocious\nwarning markings \u000con its belly\ndiffer from area\nto area.",
        },
        {
            name: "Charizard",
            imageUrl: "/artwork6.png",
            flavour: "Spits fire that\nis hot enough to\nmelt boulders. \u000cKnown to cause\nforest fires\nunintentionally.",
        }
    ]
}