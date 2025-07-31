import { validateNIK } from '../../src/validator/validateNIK';

test('validates NIK correctly', () => {
  expect(validateNIK('3201010101010001')).toBe(true);
  expect(validateNIK('abc')).toBe(false);
  expect(validateNIK('123')).toBe(false);
});
