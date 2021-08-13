import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helper';

import PaymentOptions from '.';
import cardsMock from './mock';

describe('<PaymentOptions />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    );

    expect(screen.getByLabelText(/4325/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/i)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    );

    userEvent.click(screen.getByLabelText(/4325/i));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked();
    });
  });

  it('should not call handlepayment if button is disabled', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    );

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));
    await waitFor(() => {
      expect(handlePayment).not.toHaveBeenCalled();
    });
  });

  it('should call handlepayment if button is not disabled', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    );

    userEvent.click(screen.getByLabelText(/4325/i));
    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
