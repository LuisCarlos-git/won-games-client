import { KeyboardArrowDown } from 'styled-icons/material-outlined';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard, { GameCardProps } from 'components/GameCard';
import Grid from 'components/Grid';
import Base from 'templates/Base';

import * as S from './styles';

export type GamesProps = {
  games?: GameCardProps[];
  exploreFields: ItemProps[];
};

const Games = ({ games = [], exploreFields }: GamesProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar onFilter={() => ({})} items={exploreFields} />
      <section>
        <Grid>
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </Grid>
        <S.ShowMore role="button" onClick={() => ({})}>
          <p>Show more</p>
          <KeyboardArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
);

export default Games;
