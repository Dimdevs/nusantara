# Nusantara 🦅

A utility toolkit for formatting, validating, and working with data relevant to the Indonesian context — including currency, dates, phone numbers, NIK (national ID), and more.

> Build apps faster and cleaner with localized utilities made for Indonesia.

![npm version](https://img.shields.io/npm/v/@dimdevs/nusantara)
![license](https://img.shields.io/npm/l/@dimdevs/nusantara)
![npm downloads](https://img.shields.io/npm/dm/@dimdevs/nusantara)

---

## 📦 Features

- ✅ Format currency to Rupiah
- ✅ Convert numbers to Indonesian words (terbilang)
- ✅ Format Indonesian-style dates
- ✅ Validate NIK (Nomor Induk Kependudukan)
- 🏦 List of Indonesian banks (coming soon)
- 🏛️ Regional/provincial data (planned)

---

## 📥 Installation

```bash
npm install @dimdevs/nusantara
# or
yarn add @dimdevs/nusantara
```

## 🚀 Usage

```ts
import {
  formatRupiah,
  numberToWordsId,
  formatDateId,
  validateNIK
} from '@dimdevs/nusantara';

formatRupiah(150000); 
// → 'Rp150.000'

numberToWordsId(2500);
// → 'dua ribu lima ratus'

formatDateId('2025-07-31');
// → '31 Juli 2025'

formatDateId('2025-07-31', 'short');
// → '31/8/2025'

validateNIK('3201010101010001');
// → true
```

## 📚 API Reference

### `formatRupiah(value: number | string): string`
Formats a number to Indonesian Rupiah with thousand separators.

### `numberToWordsId(value: number): string`
Converts a number into its Indonesian word representation (terbilang).

### `formatDateId(date: string | Date, format?: 'long' | 'short'): string`
Formats a date to Indonesian style. Defaults to 'long' (e.g., 31 Juli 2025).

### `validateNIK(nik: string): boolean`
Validates a 16-digit Indonesian national ID number (NIK).

## 🔧 Roadmap

- [x] Format currency
- [x] Terbilang (Indonesian words)
- [x] Format Indonesian date
- [x] Validate NIK
- [ ] List of Indonesian banks
- [ ] Province, city, district data
- [ ] NPWP, phone validator
- [ ] Holiday calculator (based on year)

## 💡 Contributing
Pull requests are welcome!
If you'd like to add more utilities relevant to Indonesia (NPWP, postal codes, validation, etc.), feel free to open an issue or submit a PR.

## 📄 License
MIT © dimdevs