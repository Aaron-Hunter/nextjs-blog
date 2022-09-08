import React from 'react';
import { HobbyScreen } from './HobbyScreen';

export default {
    component: HobbyScreen,
    title: 'HobbyScreen',
};

const Template = args => (
    <HobbyScreen {...args} />
);

export const Default = Template.bind({});