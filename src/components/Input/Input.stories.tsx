import { ComponentStory } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = () => {
  return <Input />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {};