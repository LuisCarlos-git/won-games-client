import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';

import ExploreSidebar from '.';
import items from './mock';

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /system/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should render the inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument();
  });

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar onFilter={jest.fn()} items={items} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should check inital values if passed', () => {
    renderWithTheme(
      <ExploreSidebar
        onFilter={jest.fn()}
        items={items}
        initialValues={{ windows: true, linux: true, sort_by: 'high-to-low' }}
      />
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked();
  });

  it('should return selected items on filter', () => {
    const onFilter = jest.fn();
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'high-to-low' }}
        onFilter={onFilter}
      />
    );

    const button = screen.getByRole('button', { name: /filter/i });

    fireEvent.click(button);

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'high-to-low' });
  });

  it('should return checked items', () => {
    const onFilter = jest.fn();
    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />);

    const checkbox = screen.getByRole('checkbox', { name: /windows/i });
    const radio = screen.getByRole('radio', { name: /high to low/i });
    const button = screen.getByRole('button', { name: /filter/i });

    fireEvent.click(radio);
    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'high-to-low' });
  });
});
