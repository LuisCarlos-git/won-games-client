import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: '2k',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Action', 'Adventure'],
  publisher: 'CDPROJECTRED'
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />);

    const developerHeading = screen.getByRole('heading', {
      name: /developer/i
    });
    const releaseDateHeading = screen.getByRole('heading', {
      name: /release date/i
    });
    const platformHeading = screen.getByRole('heading', {
      name: /platform/i
    });
    const publisherHeading = screen.getByRole('heading', {
      name: /publisher/i
    });
    const ratingHeading = screen.getByRole('heading', {
      name: /rating/i
    });
    const genresHeading = screen.getByRole('heading', {
      name: /genres/i
    });

    expect(developerHeading).toBeInTheDocument();
    expect(releaseDateHeading).toBeInTheDocument();
    expect(platformHeading).toBeInTheDocument();
    expect(publisherHeading).toBeInTheDocument();
    expect(ratingHeading).toBeInTheDocument();
    expect(genresHeading).toBeInTheDocument();
  });

  it('should render the platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByText('Role-playing / Action / Adventure')
    ).toBeInTheDocument();
  });
});
