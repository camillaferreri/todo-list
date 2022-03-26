import { ComponentStory } from '@storybook/react';

import { MenuItem } from '.';

export default {
  title: 'MenuItem',
  component: MenuItem,
  argTypes: {
    icon: {
      options: ["calendar", "charts", "dashboard", "settings", "teams", "trash"],
      control: { type: 'select' }
    },
  },
};

const Template: ComponentStory<typeof MenuItem> = ({ url, label, icon, selected, ...rest }) => {
  return <MenuItem url={url} label={label} icon={icon} selected={selected} {...rest} />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  url: "/",
  label: "Dashboard",
  icon: "dashboard",
  selected: false,
};