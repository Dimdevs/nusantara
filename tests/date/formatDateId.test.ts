import { formatDateId } from '../../src/date/formatDateId';

test('formats date correctly', () => {
  expect(formatDateId('2025-07-31')).toBe('31 Juli 2025');
  expect(formatDateId('2025-07-31', 'short')).toBe('31/7/2025');
});
