import Link from 'next/link';

import Button from 'components/Button';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined';

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';

import * as S from './styles';
import { formatPrice } from 'utils/formatPrice';

export type GameCardProps = {
  slug: string;
  title: string;
  price: number;
  developer: string;
  img: string;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize,
  slug
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="remove from favorite" />
        ) : (
          <FavoriteBorder aria-label="favoritar" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>
            {formatPrice({
              value: price,
              language: 'en',
              currency: 'USD'
            })}
          </S.Price>
        )}
        <S.Price aria-label="price">
          {formatPrice({
            language: 'en',
            value: promotionalPrice || price,
            currency: 'USD'
          })}
        </S.Price>
        <Button
          icon={<AddShoppingCart />}
          size="small"
          aria-label="add to cart"
        />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
