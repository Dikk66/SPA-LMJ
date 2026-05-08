import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <Navbar />
      
      <div className="text-center max-w-md animate-in fade-in zoom-in duration-500">
        {/* Animasi Centang Sederhana */}
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1 className="text-3xl font-serif font-bold text-slate-800 mb-4">
          Pemesanan Berhasil!
        </h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Terima kasih telah memilih **SPA LMJ**. Data Anda sudah kami terima. Terapis kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal keberangkatan.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition shadow-lg shadow-emerald-200"
          >
            Kembali ke Beranda
          </Link>
          <a 
            href="https://wa.me/6281234567890" // Ganti dengan nomor WA admin
            target="_blank"
            className="block w-full bg-white text-emerald-700 border-2 border-emerald-700 py-4 rounded-xl font-bold hover:bg-emerald-50 transition"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}