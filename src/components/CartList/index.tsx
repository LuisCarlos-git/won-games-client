import Link from 'next/link';
import Button from 'components/Button';
import GameItem, { GameItemProps } from 'components/GameItem';
import * as S from './styles';
import Empty from 'components/Empty';

export type CartListProps = {
  items?: GameItemProps[];
  total?: string;
  hasButton?: boolean;
};

const CartList = ({
  items = [],
  total = '',
  hasButton = false
}: CartListProps) => (
  <S.Wrapper>
    {items.length ? (
      items.map((item) => <GameItem key={item.title} {...item} />)
    ) : (
      <Empty
        title="Your cart is empty"
        description="Your cart is empty, explore our catalog"
      />
    )}

    {!!items.length && (
      <S.Footer>
        {!hasButton && <span>Total</span>}
        <S.Total>{total}</S.Total>
        {hasButton && (
          <Link href="/cart" passHref>
            <Button as="a">Buy it now</Button>
          </Link>
        )}
      </S.Footer>
    )}
  </S.Wrapper>
);

export default CartList;
