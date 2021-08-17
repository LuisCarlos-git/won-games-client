/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import { Add, ShoppingCart } from 'styled-icons/material-outlined';

import * as S from './styles';

export type PaymentCard = {
  flag: string;
  image: string;
  cardNumber: string;
};

export type PaymentOptionsProps = {
  handlePayment: () => void;
  cards?: PaymentCard[];
};

const PaymentOptions = ({ cards = [], handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <S.Wrapper>
      <S.Body>
        <Heading size="small" color="black" lineBottom lineColor="primary">
          Payment
        </Heading>
        <S.CardsList>
          {cards.map((card) => (
            <S.CardItem key={card.cardNumber}>
              <S.CardInfo>
                <img src={card.image} alt={card.flag} />
                {card.cardNumber}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.cardNumber}
                onCheck={() => setChecked(true)}
                value={card.cardNumber}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button minimal as="a" fullWidth>
          Continue shopping
        </Button>
        <Button
          onClick={handlePayment}
          disabled={!checked}
          icon={<ShoppingCart size={20} />}
          fullWidth
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
