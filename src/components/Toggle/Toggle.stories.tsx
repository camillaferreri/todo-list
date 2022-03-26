import { ComponentStory } from '@storybook/react';

import { Toggle } from '.';

export default {
  title: 'Toggle',
  component: Toggle,
};

const Template: ComponentStory<typeof Toggle> = ({ checked, ...rest }) => {
  return <Toggle checked={checked} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  checked: false,
};