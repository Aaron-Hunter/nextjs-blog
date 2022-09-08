import React from "react";


export const decorators = [
    (Story) => (
        <div>
            {Story()}
        </div>

    )
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true }
};