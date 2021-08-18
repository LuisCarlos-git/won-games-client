import OrdersList, { OrdersListProps } from 'components/OrderList';
import orderListMock from 'components/OrderList/mock';
import Profile from 'templates/Profile';

export default function Orders(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: orderListMock
    }
  };
}
