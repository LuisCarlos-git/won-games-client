import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render checkbox', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render checkbox without label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByText(/checkbox label/i)).not.toBeInTheDocument();
  });

  it('should render checkbox with label color is black default ', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render checkbox with label color is white ', () => {
    renderWithTheme(
      <Checkbox labelColor="white" label="checkbox label" labelFor="check" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox onCheck={onCheck} label="checkbox label" labelFor="check" />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText(/checkbox label/i));
    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1);
    });

    expect(onCheck).toBeCalledWith(true);
  });
  it('should verify checkbox is checked', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        onCheck={onCheck}
        label="checkbox label"
        labelFor="check"
        isChecked
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText(/checkbox label/i));
    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1);
    });

    expect(onCheck).toBeCalledWith(false);
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus();
  });
});
