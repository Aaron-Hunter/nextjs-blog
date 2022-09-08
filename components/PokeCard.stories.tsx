import React from 'react';
import { PokeCard } from './PokeCard';

export default {
    component: PokeCard,
    title: 'PokeCard',
};

const Template = args => (
    <div style={{width: "fit-content"} }>
        <PokeCard {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    card: {
        name: "Fearow",
        imageUrl: "/artwork22.png",
        flavour: "With its huge and\nmagnificent wings,\nit can keep aloft \u000cwithout ever\nhaving to land\nfor rest.",
    }
}