import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu
} as Meta;

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />;
Mobile.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};
