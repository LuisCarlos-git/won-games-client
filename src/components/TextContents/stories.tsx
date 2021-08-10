import { Story, Meta } from '@storybook/react/types-6-0';
import TextContents, { TextContentProps } from '.';
import props from './mock';

export default {
  title: 'TextContents',
  component: TextContents,
  args: props,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<TextContentProps> = (args) => (
  <TextContents {...args} />
);
