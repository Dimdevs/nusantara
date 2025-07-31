import { numberToWordsId } from '../../src/currency/numberToWordsId';

test('converts number to Indonesian words', () => {
  expect(numberToWordsId(0)).toBe('nol');
  expect(numberToWordsId(11)).toBe('sebelas');
  expect(numberToWordsId(21)).toBe('dua puluh satu');
});
