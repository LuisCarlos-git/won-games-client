import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';
import { Email } from 'styled-icons/material-outlined';

export default {
  title: 'Form/TextField',
  component: TextField
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

Default.args = {
  label: 'E-mail',
  placeholder: 'luis@teste.com.br',
  name: 'email'
};

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div
    style={{
      width: '300px'
    }}
  >
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  label: 'E-mail',
  placeholder: 'luis@teste.com.br',
  icon: <Email />,
  name: 'email'
};

export const WithError: Story<TextFieldProps> = (args) => (
  <div
    style={{
      width: '300px'
    }}
  >
    <TextField {...args} />
  </div>
);

WithError.args = {
  label: 'E-mail',
  placeholder: 'luis@teste.com.br',
  name: 'email',
  icon: <Email />,
  error: 'Digite um e-mail valido!'
};
