import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Gallery from '.';

const items = [
  {
    src:
      'https://raw.githubusercontent.com/Won-Games/client/48dc534d44bcb0f0175e373093d3c85bc178a353/public/img/games/cyberpunk-1.jpg',
    alt: 'Gallery Image 1'
  },
  {
    src:
      'https://raw.githubusercontent.com/Won-Games/client/48dc534d44bcb0f0175e373093d3c85bc178a353/public/img/games/cyberpunk-2.jpg',
    alt: 'Gallery Image 2'
  }
];

describe('<Gallery />', () => {
  it('should render thumbnails as button', () => {
    renderWithTheme(<Gallery items={items} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', items[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', items[1].src);
  });

  it('should handle the open modal', () => {
    renderWithTheme(<Gallery items={items} />);

    const modalElement = screen.getByLabelText('modal');

    expect(modalElement.getAttribute('aria-hidden')).toBe('true');
    expect(modalElement).toHaveStyle({
      opacity: 0
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );
    expect(modalElement.getAttribute('aria-hidden')).toBe('false');
    expect(modalElement).toHaveStyle({
      opacity: 1
    });
  });

  it('should handle the close modal when overlay or button', () => {
    renderWithTheme(<Gallery items={items} />);

    const modalElement = screen.getByLabelText('modal');

    fireEvent.click(screen.getByLabelText('close modal'));
    expect(modalElement.getAttribute('aria-hidden')).toBe('true');
    expect(modalElement).toHaveStyle({
      opacity: 0
    });
  });

  it('should handle the close modal when esc or button is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={items} />);

    const modalElement = screen.getByLabelText('modal');

    fireEvent.keyUp(container, { key: 'Escape' });
    expect(modalElement.getAttribute('aria-hidden')).toBe('true');
    expect(modalElement).toHaveStyle({
      opacity: 0
    });
  });

  it('should handle ', async () => {
    renderWithTheme(<Gallery items={items} />);

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    );

    const img = await screen.findByRole('img', { name: /Gallery Image 2/i });

    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
