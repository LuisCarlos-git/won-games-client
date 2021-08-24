import {
  AddShoppingCart,
  FavoriteBorder
} from 'styled-icons/material-outlined';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';

import * as S from './styles';
import { formatPrice } from 'utils/formatPrice';

export type GameInfoProps = {
  title: string;
  price: number;
  description: string;
};

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <S.HeadingWrapper>
      <Heading size="medium" lineBottom color="black">
        {title}
      </Heading>

      <Ribbon color="secondary" size="normal">
        {formatPrice({
          language: 'en',
          currency: 'USD',
          value: price
        })}
      </Ribbon>
    </S.HeadingWrapper>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />}>
        Add to cart
      </Button>
      <Button size="large" minimal icon={<FavoriteBorder />}>
        Whishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
