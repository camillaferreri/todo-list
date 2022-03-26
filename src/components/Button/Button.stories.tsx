import { ComponentStory } from '@storybook/react';

import { Button } from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { control: false },
    className: { control: false },
  }
};

const Template: ComponentStory<typeof Button> = ({ label, icon, preset, disabled, ...rest }) => {
  return (
    <Button 
      label={label}
      icon={icon}
      preset={preset}
      disabled={disabled}
      {...rest} 
    />
  );
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  label: "Add",
  preset: "primary",
  size: "small",
  disabled: false
};