import { Story, Meta } from '@storybook/react/types-6-0';
import GameInfo, { GameInfoProps } from '.';
import props from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo
} as Meta;

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />;

Default.args = { ...props };
