const MONTHS = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export function formatDateId(
  date: string | Date,
  format: 'long' | 'short' = 'long'
): string {
  const jakartaDate = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date(date))
      .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')
  );

  const day = jakartaDate.getDate();
  const month = jakartaDate.getMonth();
  const year = jakartaDate.getFullYear();

  return format === 'long'
    ? `${day} ${MONTHS[month]} ${year}`
    : `${day}/${month + 1}/${year}`;
}
