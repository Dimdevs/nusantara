export function formatRupiah(value) {
    const num = typeof value === 'string' ? parseInt(value, 10) : value;
    return 'Rp' + num.toLocaleString('id-ID');
}
