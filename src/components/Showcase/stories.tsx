import { Story, Meta } from '@storybook/react/types-6-0';
import Showcase, { ShowcaseProps } from '.';

import HighlightMock from 'components/Highlight/mock';
import GamerCardSliderMock from 'components/GamerCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.args = {
  title: 'titulo de teste',
  highlight: HighlightMock,
  games: GamerCardSliderMock
};

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.args = {
  highlight: HighlightMock,
  games: GamerCardSliderMock
};

export const WithoutGameSlide: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutGameSlide.args = {
  title: 'titulo de teste',
  highlight: HighlightMock
};

export const WithoutHightlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHightlight.args = {
  title: 'titulo de teste',
  games: GamerCardSliderMock
};
