"use client";
import Navbar from '@/components/layout/Navbar';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-12 shadow-xl">
          <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">Reservasi Senzia</h2>
          <p className="text-slate-500 mb-8">Silakan hubungi WhatsApp kami untuk booking cepat.</p>
          <a href="https://wa.me/628123456789" className="inline-block bg-emerald-900 text-white px-10 py-4 rounded-full font-bold">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}