export function validateNIK(nik: string): boolean {
  return /^[0-9]{16}$/.test(nik);
}
