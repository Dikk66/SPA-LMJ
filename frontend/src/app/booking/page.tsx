"use client";
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { Suspense } from 'react';

// 1. Kita buat komponen Form-nya terpisah
function BookingForm() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service') || '';

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-emerald-900/5">
      <h1 className="text-3xl font-serif font-bold text-emerald-900 mb-2 text-center">Reservasi Layanan</h1>
      <p className="text-slate-500 text-center mb-10">Isi data diri Anda, terapis kami akan segera menghubungi.</p>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Pilih Layanan</label>
          <select 
            defaultValue={selectedService}
            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          >
            <option value="">-- Pilih Layanan --</option>
            <option value="tradisional">Pijat Tradisional - Rp 95.000</option>
            <option value="refleksi">Refleksi Kaki - Rp 70.000</option>
            <option value="spa-lulur">Full Body Spa & Lulur - Rp 165.000</option>
            <option value="ibu-anak">Pijat Ibu & Anak - Rp 135.000</option>
            <option value="hot-stone">Hot Stone Therapy - Rp 190.000</option>
            <option value="facial">Facial Relaksasi - Rp 110.000</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-emerald-900 mb-2">Nama Lengkap</label>
            <input type="text" placeholder="Contoh: Budi Santoso" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-bold text-emerald-900 mb-2">Nomor WhatsApp</label>
            <input type="tel" placeholder="0812..." className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Alamat di Lumajang (Lengkap)</label>
          <textarea placeholder="Nama Jalan, Blok, No Rumah, Kec/Kel" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-emerald-500 h-32"></textarea>
        </div>

        <button type="submit" className="w-full bg-emerald-900 text-white py-5 rounded-full font-bold text-lg hover:bg-emerald-800 shadow-lg shadow-emerald-900/20 transition-all active:scale-95">
          Konfirmasi Booking
        </button>
      </form>
    </div>
  );
}

// 2. Halaman utama yang membungkus form dengan Suspense
export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        {/* Suspense ini yang bikin error deploy hilang */}
        <Suspense fallback={<div className="text-center py-20 text-emerald-900 font-bold">Memuat Form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
}