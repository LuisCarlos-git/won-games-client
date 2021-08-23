import { Story, Meta } from '@storybook/react/types-6-0';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  title: 'Dropdown',
  children: 'By now'
};
