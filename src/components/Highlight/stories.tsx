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

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/float__image__higlight.png'
};
