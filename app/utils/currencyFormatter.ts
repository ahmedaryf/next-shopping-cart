const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "MVR",
  style: "currency",
});

export default function currencyFormatter(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
