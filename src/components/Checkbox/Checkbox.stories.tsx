import { ComponentStory } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = ({ checked, ...rest }) => {
  return <Checkbox checked={checked} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  checked: false,
};