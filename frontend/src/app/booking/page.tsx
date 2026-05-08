"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';

// MEMAKSA Vercel mengabaikan halaman ini saat build
const BookingForm = dynamic(() => import('@/components/booking/BookingForm'), { 
  ssr: false,
  loading: () => <div className="text-center py-20 font-bold text-emerald-900">Memuat...</div>
});

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <BookingForm />
      </div>
    </main>
  );
}
