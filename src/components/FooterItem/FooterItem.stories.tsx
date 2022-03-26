import { ComponentStory } from '@storybook/react';

import { FooterItem } from '.';

export default {
  title: 'FooterItem',
  component: FooterItem,
  argTypes: {
    url: { control: false },
  }
};

const Template: ComponentStory<typeof FooterItem> = ({ label, icon, selected, ...rest }) => {
  return <FooterItem 
    label={label}
    icon={icon}
    selected={selected}
    {...rest} 
  />;
};

export const ExampleStory = Template.bind({});
ExampleStory.args= {
  icon: "dashboard",
  label: "Dashboard",
  selected: false,
  url: "/"
};