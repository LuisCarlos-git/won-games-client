import Heading from 'components/Heading';
import { PaymentCard } from 'components/PaymentOptions';
import React from 'react';
import * as S from './styles';

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => (
  <React.Fragment>
    <Heading color="black" lineBottom lineColor="primary">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.cardNumber}>
        <img src={card.image} alt={card.flag} />
        <span>{card.cardNumber}</span>
      </S.Card>
    ))}
  </React.Fragment>
);

export default CardsList;
