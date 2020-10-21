import React from 'react';

import ChefProfile from './index';

export default {
  title: 'ChefProfile',
  component: ChefProfile
};


const Template = (args) => <ChefProfile {...args}  />;

export const Default = Template.bind({});
Default.args = {
  chef_img: "https://d1ureao5dcqpo4.cloudfront.net/media/avatar/JGV-PERFIL95396.png"
};
