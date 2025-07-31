const satuan = [
  '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'
];

export function numberToWordsId(value: number): string {
  if (value === 0) return 'nol';
  if (value < 0 || value > 9999) return 'di luar jangkauan';
  const ribuan = Math.floor(value / 1000);
  const ratusan = Math.floor((value % 1000) / 100);
  const puluhan = Math.floor((value % 100) / 10);
  const satu = value % 10;
  return [
    ribuan ? satuan[ribuan] + ' ribu' : '',
    ratusan ? satuan[ratusan] + ' ratus' : '',
    puluhan === 1
      ? value % 100 === 11
        ? 'sebelas'
        : satu === 0
        ? 'sepuluh'
        : satuan[satu] + ' belas'
      : puluhan > 1
      ? satuan[puluhan] + ' puluh'
      : '',
    puluhan !== 1 ? satuan[satu] : '',
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
}
