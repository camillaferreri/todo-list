import { ComponentStory } from '@storybook/react';

import { MenuItem } from '.';
import { Badge } from '../Badge';

export default {
  title: 'MenuItem',
  component: MenuItem,
  argTypes: {
    url: { control: false },
    children: { control: false },
  },
};

const Template: ComponentStory<typeof MenuItem> = ({ url, label, icon, selected, ...rest }) => {
  return <MenuItem 
    url={url} 
    label={label} 
    icon={icon} 
    selected={selected} 
    {...rest} 
  />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  url: "/",
  label: "Dashboard",
  icon: "dashboard",
  selected: false,
};

export const MenuWithBadge = Template.bind({});
MenuWithBadge.args= {
  url: "/",
  label: "Dashboard",
  icon: "dashboard",
  selected: true,
  children: <Badge preset='white'>3/5</Badge>
};