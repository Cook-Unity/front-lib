module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/preset-scss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       modules: {
    //         localIdentName: '[name]__[local]--[hash:base64:5]'
    //       }
    //     }
    //   }
    // }
  ]
}
