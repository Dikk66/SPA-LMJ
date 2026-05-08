// Ganti dengan IP MacBook temanmu jika dia yang menjalankan backend, 
// atau localhost:3001 jika kamu menjalankan backend di laptop sendiri.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const apiService = {
  // Fungsi untuk mengambil daftar layanan
  getServices: async () => {
    const res = await fetch(`${BASE_URL}/services`);
    if (!res.ok) throw new Error('Gagal mengambil data layanan');
    return res.json();
  },

  // Fungsi untuk mengirim data booking
  createBooking: async (bookingData: any) => {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return res.json();
  },
  
  // Fungsi untuk dashboard admin
  getAllBookings: async () => {
    const res = await fetch(`${BASE_URL}/bookings`);
    return res.json();
  }
};