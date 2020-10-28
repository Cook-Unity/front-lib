import React from 'react';

import IngredientsModal from './index';

export default {
  title: 'IngredientsModal',
  component: IngredientsModal
};

const Template = (args) => <IngredientsModal  {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedIngredient: {
    name: "Coconut Milk",
    image: "https://d1ureao5dcqpo4.cloudfront.net/media/Ingredients/323743_1100.jpg",
    component_code: 'hola',
    description: 'Coconut milk is a vegan, lactose-free, environmentally friendly beverage that can substitute dairy milk. It contains almost the same amount of protein per serving and has a creamy special savory taste that enriches every dish without adding any cholesterol. Calcium enriched options are great for vegans to help maintain bones and teeth healthy!',
  },
  isOpen: true
};
