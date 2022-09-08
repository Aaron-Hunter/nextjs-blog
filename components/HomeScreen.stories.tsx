import React from 'react';
import { HomeScreen } from './HomeScreen';

export default {
    component: HomeScreen,
    title: 'HomeScreen',
};

const Template = args => (
    <HomeScreen {...args} />
);

export const Default = Template.bind({});