import React from 'react';
import { SpriteRow } from './SpriteRow';

export default {
    component: SpriteRow,
    title: 'SpriteRow',
};

const Template = args => <SpriteRow {...args} />;

export const Default = Template.bind({});
Default.args = {
    sprites: [
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
    
}