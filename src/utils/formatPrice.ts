type FormatProps = {
  language: string;
  currency: string;
  value: number | bigint;
};

export function formatPrice({ language, currency, value }: FormatProps) {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency
  }).format(value);
}
