import { GameCardProps } from 'components/GameCard';
import GamerCardSlider from 'components/GamerCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import * as S from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};

const Showcase = ({ highlight, games, title }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}

    {!!games && <GamerCardSlider items={games} />}
  </S.Wrapper>
);

export default Showcase;
