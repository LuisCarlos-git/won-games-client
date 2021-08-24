import { Story, Meta } from '@storybook/react/types-6-0';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population zero',
    developer: 'Rockstar games',
    img:
      'https://steamcdn-a.akamaihd.net/steam/apps/1239430/capsule_616x353.jpg?t=1588101432',
    price: 'R$ 235,00'
  }
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const withRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard
      {...args}
      ribbon="20% OFF"
      ribbonColor="secondary"
      ribbonSize="small"
    />
  </div>
);
