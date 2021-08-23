import CartIcon from 'components/CartIcon';
import CartList from 'components/CartList';
import Dropdown from 'components/Dropdown';
import { GameItemProps } from 'components/GameItem';

import * as S from './styles';

export type CartDropdownProps = {
  cartItems: GameItemProps[];
  total?: string;
};

const CartDropdown = ({ cartItems, total = '' }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList total={total} items={cartItems} hasButton />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;
