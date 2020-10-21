import React from 'react';

import NutritionalFacts from './index';

export default {
  title: 'NutritionalFacts',
  component: NutritionalFacts
};


const Template = (args) => <NutritionalFacts {...args}  />;

export const Default = Template.bind({});
Default.args = {
  chef_img: "https://d1ureao5dcqpo4.cloudfront.net/media/avatar/JGV-PERFIL95396.png"
};
