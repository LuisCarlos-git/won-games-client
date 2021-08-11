import Base from 'templates/Base';
import GameInfo, { GameInfoProps } from 'components/GameInfo';

import * as S from './styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
};

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover role="image" src={cover} aria-label="cover" />
    <S.SectionGameInfo>
      <S.Main>
        <GameInfo {...gameInfo} />
      </S.Main>
    </S.SectionGameInfo>
  </Base>
);

export default Game;
