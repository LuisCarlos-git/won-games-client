import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import props from './mock';

import GameItem from '.';

describe('<GameItem />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole('img', { name: /game image/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument();
    expect(screen.getByText('$235,00')).toBeInTheDocument();
  });

  it('should render download link', () => {
    const link = 'http://www.link.com';
    renderWithTheme(<GameItem {...props} downloadLink={link} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', link);
  });

  it('should render payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img:
        'https://github.com/Won-Games/client/blob/e5ad4622b684950a4fdb1c45c5b73e6715e73971/public/img/master-card.png?raw=true',
      cardNumber: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    };
    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);
    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveProperty(
      'src',
      paymentInfo.img
    );
    expect(screen.getByText(paymentInfo.cardNumber)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
