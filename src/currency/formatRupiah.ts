interface FormatRupiahOptions {
  withPrefix?: boolean; // default: true
  prefix?: string;      // default: "Rp"
  decimal?: boolean;    // default: false
  decimalDigits?: number; // default: 2 if decimal === true
  separator?: string;   // default: '.'
}

export function formatRupiah(
  value: number | string,
  options?: FormatRupiahOptions
): string {
  const {
    withPrefix = true,
    prefix = 'Rp',
    decimal = false,
    decimalDigits = 2,
    separator = '.',
  } = options || {};

  const num = typeof value === 'string' ? parseFloat(value) : value;

  const parts = num
    .toFixed(decimal ? decimalDigits : 0)
    .split('.');

  const formattedInt = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  const formatted = decimal ? `${formattedInt},${parts[1]}` : formattedInt;

  return withPrefix ? `${prefix}${formatted}` : formatted;
}
