import { Story, Meta } from '@storybook/react/types-6-0';
import MediaMatch, { MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta;

export const Desktop: Story<MediaMatchProps> = (args) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only on desktop
  </MediaMatch>
);

export const Mobile: Story<MediaMatchProps> = (args) => (
  <MediaMatch lessThan="medium" {...args}>
    Only on mobile
  </MediaMatch>
);

Mobile.parameters = {
  viewport: { defaultViewport: 'mobile1' }
};

// greterThan = maior que
// lessThan= menor que
