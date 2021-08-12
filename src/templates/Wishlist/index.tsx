import Heading from 'components/Heading';
import { Container } from 'components/Container';
import Base from 'templates/Base';
import GameCard, { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import Showcase from 'components/Showcase';

import Grid from 'components/Grid';
import Divider from 'components/Divider';
import Empty from 'components/Empty';

export type WishlistProps = {
  recommendedGames: GameCardProps[];
  highlight: HighlightProps;
  games?: GameCardProps[];
};

const Wishlist = ({
  highlight,
  recommendedGames,
  games = []
}: WishlistProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>
    <Showcase
      title="You may like this games"
      games={recommendedGames}
      highlight={highlight}
    />
  </Base>
);

export default Wishlist;
