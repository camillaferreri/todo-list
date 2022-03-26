import { ComponentStory } from '@storybook/react';

import { Todo } from '.';

export default {
  title: 'Todo',
  component: Todo,
};

const Template: ComponentStory<typeof Todo> = ({ isHighPriority, checked, text, ...rest }) => {
  return <Todo isHighPriority={isHighPriority} checked={checked} text={text} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  isHighPriority: false,
  checked: false,
  text: 'Test for latest changes on homepage',
};