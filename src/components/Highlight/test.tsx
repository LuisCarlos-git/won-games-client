import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import Highlight from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'By now',
  buttonLink: '/rdr2',
  backgroundImage: 'img/image.jpg'
};

describe('<Highlight />', () => {
  it('should render the headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /by now/i })).toBeInTheDocument();
  });

  it('should render the background', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });
  });

  it('should render the float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );
  });

  it('should render align left by prop', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveStyleRule(
      'grid-template-areas',
      'floatImage content'
    );
  });

  it('should render align right by default', () => {
    renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" alignment="left" />
    );

    expect(screen.getByRole('img', { name: props.title })).toHaveStyleRule(
      'grid-template-areas',
      'content floatImage'
    );
  });
});
