import { fireEvent, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helper';

import GameCard from '.';

const props = {
  title: 'Population zero',
  developer: 'Rockstar games',
  img:
    'https://steamcdn-a.akamaihd.net/steam/apps/1239430/capsule_616x353.jpg?t=1588101432',
  price: 'R$ 235,00'
};

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/favoritar/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);

    expect(screen.getByLabelText(/price/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByLabelText(/price/i)).not.toHaveStyle({
      color: theme.colors.gray
    });

    expect(screen.getByLabelText(/price/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />);

    const price = screen.getByText(props.price);

    expect(price).toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render fill favorite icon when is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);
    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument();
  });

  it('should render call onFav method when favorite is click', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();

    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument();
  });

  it('should render fill favorite icon when is true', () => {
    renderWithTheme(<GameCard {...props} favorite />);
    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument();
  });

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="my ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });

    expect(ribbon).toHaveStyle({
      fontSize: theme.font.sizes.xsmall,
      height: '2.6rem'
    });

    expect(ribbon).toBeInTheDocument();
  });
});
