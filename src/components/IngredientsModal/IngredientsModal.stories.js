import React from 'react';

import IngredientsModal from './index';

export default {
  title: 'IngredientsModal',
  component: IngredientsModal
};

const Template = (args) => <IngredientsModal  {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Contains Nuts",
  image: "https://d1ureao5dcqpo4.cloudfront.net/media/avatar/JGV-PERFIL95396.png",
  component_code: 'hola',
  description: 'chau',
  isOpen: true,
  onRequestClose: () => console.log('hola')
};
