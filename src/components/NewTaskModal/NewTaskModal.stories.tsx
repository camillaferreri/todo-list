import { ComponentStory } from '@storybook/react';

import { NewTaskModal } from '.';

export default {
  title: 'NewTaskModal',
  component: NewTaskModal,
  argTypes: {
    onClose: { control: false },
    open: { control: false },
  }
};

const Template: ComponentStory<typeof NewTaskModal> = ({ ...rest }) => {
  return <NewTaskModal {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  open: true
};