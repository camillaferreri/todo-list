import { ComponentStory } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'Badge',
  component: Badge,
};

const Template: ComponentStory<typeof Badge> = ({ checked, ...rest }) => {
  return <Badge checked={checked} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  checked: false,
};