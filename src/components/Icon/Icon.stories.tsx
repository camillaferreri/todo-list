import { ComponentStory } from '@storybook/react';

import { Icon } from '.';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
  }
};

const Template: ComponentStory<typeof Icon> = ({ icon, ...rest }) => {
  return <Icon icon={icon} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  icon: "dashboard",
};