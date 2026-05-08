"use client";

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import { Suspense } from 'react';

// 1. Komponen Internal yang menggunakan useSearchParams
function BookingFormInner() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service') || '';

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-emerald-900/5 border border-slate-100">
      <h1 className="text-3xl font-serif font-bold text-emerald-900 mb-2 text-center">Reservasi Layanan</h1>
      <p className="text-slate-500 text-center mb-10">Lengkapi data untuk terapis Senzia kami.</p>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Layanan yang Dipilih</label>
          <select 
            defaultValue={selectedService}
            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none"
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
            <input type="text" placeholder="Budi Santoso" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-emerald-900 mb-2">WhatsApp</label>
            <input type="tel" placeholder="0812345..." className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Alamat Panggilan (Lumajang)</label>
          <textarea placeholder="Contoh: Jl. Panglima Sudirman No. 10, Kec. Lumajang" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 h-32 focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
        </div>

        <button type="submit" className="w-full bg-emerald-900 text-white py-5 rounded-full font-bold text-lg hover:bg-emerald-800 shadow-lg active:scale-95 transition-all">
          Konfirmasi Booking
        </button>
      </form>
    </div>
  );
}

// 2. Halaman Utama yang di-Export Default
export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        {/* PEMBUNGKUS KRUSIAL: Suspense Boundary */}
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-20 text-emerald-900">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-900"></div>
             <p className="mt-4 font-bold">Menyiapkan Form...</p>
          </div>
        }>
          <BookingFormInner />
        </Suspense>
      </div>
    </main>
  );
}