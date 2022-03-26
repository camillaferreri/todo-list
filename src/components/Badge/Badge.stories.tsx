import { ComponentStory } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    preset: {
      control: { type: 'select' }
    },
  },
};

const Template: ComponentStory<typeof Badge> = ({ preset, ...rest }) => {
  return <Badge preset={preset} {...rest} >2/5</Badge>;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  preset: "lightBlue"
};