import { Story, Meta } from '@storybook/react/types-6-0';
import UserDropdown, { UserDropdownProps } from '.';

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    background: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<UserDropdownProps> = (args) => (
  <div
    style={{
      maxWidth: '98%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-end'
    }}
  >
    <UserDropdown {...args} />
  </div>
);

Default.args = {
  username: 'Luis Carlos'
};
