"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';

// Kita panggil form secara dinamis, mematikan SSR khusus untuk bagian ini
const BookingForm = dynamic(() => import('@/components/booking/BookingForm'), { 
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-900"></div>
    </div>
  )
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
