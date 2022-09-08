module.exports = {
    stories: ['../components/**/*.stories.tsx'],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "@storybook/addon-controls",
        "@storybook/addon-viewport",
        "@storybook/addon-interactions"        
    ],
    staticDirs: ['../public']
}