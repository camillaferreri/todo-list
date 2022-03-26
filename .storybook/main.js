module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-addon-a11y',
    'storybook-dark-mode',
    'addon-screen-reader',
    'aria-live-storybook-addon',
    'storybook-addon-pseudo-states'
  ]
}