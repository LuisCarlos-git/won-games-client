import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helper';

import TextField from '.';

describe('<TextField />', () => {
  it('should render the label', () => {
    renderWithTheme(<TextField label="label" />);

    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });

  it('should render the whithout label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByText(/label/i)).not.toBeInTheDocument();
  });

  it('should render the labelFor', () => {
    renderWithTheme(<TextField label="label" labelFor="labelFor" />);

    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'labelFor');
  });

  it('should render the placeholder', () => {
    renderWithTheme(
      <TextField label="label" labelFor="labelFor" placeholder="any" />
    );

    expect(screen.getByLabelText(/label/i)).toHaveAttribute(
      'placeholder',
      'any'
    );
  });

  it('Changes values when typing', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField onInput={onInput} label="label" labelFor="labelFor" />
    );

    const input = screen.getByRole('textbox');
    const text = 'this is my new text';

    userEvent.type(input, text);
    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
