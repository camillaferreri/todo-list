import { ComponentStory } from '@storybook/react';

import { PriorityDot } from '.';

export default {
  title: 'PriorityDot',
  component: PriorityDot,
};

const Template: ComponentStory<typeof PriorityDot> = ({ isHighPriority, ...rest }) => {
  return <PriorityDot isHighPriority={isHighPriority} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  isHighPriority: false,
};