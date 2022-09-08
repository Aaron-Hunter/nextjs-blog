import React from 'react';
import { RefreshButton } from './RefreshButton';

export default {
    component: RefreshButton,
    title: 'RefreshButton',
};

const Template = args => (
    <RefreshButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    text: "Refresh",
}