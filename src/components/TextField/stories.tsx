import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

Default.args = {
  label: 'E-mail',
  placeholder: 'luis@teste.com.br'
};
