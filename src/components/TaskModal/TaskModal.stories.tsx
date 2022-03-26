import { ComponentStory } from '@storybook/react';

import { TaskModal } from '.';

export default {
  title: 'TaskModal',
  component: TaskModal,
  argTypes: {
    id: { control: false },
    onClose: { control: false },
    open: { control: false },
  }
};

const Template: ComponentStory<typeof TaskModal> = ({ text, isHighPriority, checked, ...rest }) => {
  return <TaskModal 
    open={true} 
    text={text}
    isHighPriority={isHighPriority}
    checked={checked}
    {...rest} 
  />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  text: "New design system: brainstorming",
  isHighPriority: false,
  checked: false,
};