import React from 'react';
import { PokeTeamScreen } from './PokeTeamScreen';

export default {
    component: PokeTeamScreen,
    title: 'PokeTeamScreen',
};

const Template = args => (
    <PokeTeamScreen {...args} />
);

export const Default = Template.bind({});