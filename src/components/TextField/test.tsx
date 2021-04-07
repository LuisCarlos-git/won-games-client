import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helper';
import { Email } from 'styled-icons/material-outlined';

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

  it('icon version', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByLabelText(/textfield/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('icon default position (left)', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
      />
    );

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({
      order: '1'
    });
  });

  it('icon position (right)', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({
      order: '2'
    });
  });

  it('input disabled', async () => {
    const onInput = jest.fn();

    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('Check the render of erros', async () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid="icon" />}
        error="Digite um e-mail valido!"
      />
    );

    expect(screen.getByText(/Digite um e-mail valido!/i)).toBeInTheDocument();

    expect(screen.getByTestId('icon')).toHaveStyle({
      color: '#e31963'
    });
    expect(screen.getByText(/textfield/i)).toHaveStyle({
      color: '#e31963'
    });

    expect(screen.getByRole('textbox').parentElement).toHaveStyle({
      'border-color': '#e31963'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
