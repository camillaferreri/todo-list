import { ComponentStory } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = ({ isHighPriority, checked, text, ...rest }) => {
  return <Input isHighPriority={isHighPriority} checked={checked} text={text} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  isHighPriority: false,
  checked: false,
  text: 'Test for latest changes on homepage',
};