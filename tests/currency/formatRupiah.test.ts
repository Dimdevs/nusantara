import { formatRupiah } from '../../src/currency/formatRupiah';

test('formats number to Rupiah', () => {
  expect(formatRupiah(10000)).toBe('Rp10.000');
  expect(formatRupiah('25000')).toBe('Rp25.000');
});
