import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read dead it´s back',
    subtitle: 'Come see John´s new adventure',
    buttonLink: '/rdr2',
    buttonLabel: 'By now',
    backgroundImage: '/img/bg__highlight.png'
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;
