import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import TextContents from '.';

const props = {
  title: 'description',
  content: '<h1>test</h1>'
};

describe('<TextContents />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContents {...props} />);

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(<TextContents content={props.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(<TextContents {...props} />);

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement;

    expect(wrapper).toHaveStyle({
      color: '#fafafa'
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    });
  });
});
