import React from 'react';
import {
    fireEvent,
    within,
    waitFor
} from '@storybook/testing-library';
import { Hamburger } from './Hamburger';

export default {
    component: Hamburger,
    title: 'Hamburger',
    decorators: [story => <div style={{ display: "flex", justifyContent: "right" }}>{story()}</div>],
};

const Template = args => (
    <Hamburger {...args} />
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
        await fireEvent.click(canvas.getByLabelText('Show menu'));
        await fireEvent.click(canvas.getByLabelText('Show menu'));
    });
};