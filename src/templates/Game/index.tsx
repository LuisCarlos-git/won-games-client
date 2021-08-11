import Base from 'templates/Base';
import GameInfo, { GameInfoProps } from 'components/GameInfo';
import Gallery, { GalleryImageProps } from 'components/Gallery';

import * as S from './styles';
import TextContent from 'components/TextContent';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  gameDetails: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recomendedGames: GameCardProps[];
};

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  recomendedGames,
  upcomingGames,
  upcomingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover role="image" src={cover} aria-label="cover" />
    <S.SectionGameInfo>
      <S.Main>
        <GameInfo {...gameInfo} />
      </S.Main>
    </S.SectionGameInfo>

    {gallery && (
      <S.SectionGallery>
        <Gallery items={gallery} />
      </S.SectionGallery>
    )}

    <S.SectionDescription>
      <TextContent title="Description" content={description} />
    </S.SectionDescription>

    <S.SectionGameDetails>
      <GameDetails {...gameDetails} />
    </S.SectionGameDetails>

    <Showcase
      title="Upcomming"
      games={upcomingGames}
      highlight={upcomingHighlight}
    />
    <Showcase title="You may like this games" games={recomendedGames} />
  </Base>
);

export default Game;
