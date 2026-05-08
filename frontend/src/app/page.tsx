import Navbar from '@/components/layout/Navbar';
import ServiceList from '@/components/home/ServiceList';
import Chatbot from '@/components/shared/Chatbot';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Klasik Emerald yang kamu suka */}
      <section className="relative h-[85vh] flex items-center justify-center bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl animate-in">
          <span className="inline-block px-4 py-1 bg-gold/20 text-white border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Pijat Panggilan Lumajang Profesional
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Ketenangan Sempurna <br /> di Rumah Anda.
          </h1>
          <p className="text-lg md:text-xl text-emerald-50/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Layanan spa bintang lima dengan harga terjangkau mulai dari <span className="text-white font-bold underline decoration-gold">Rp70.000</span>. Rasakan sensasi relaksasi SENZIA.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/booking" className="w-full md:w-auto bg-white text-emerald-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition shadow-2xl">
              Booking Sekarang
            </Link>
            <Link href="/services" className="w-full md:w-auto border-2 border-emerald-400/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              Daftar Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Layanan dengan Gambar */}
      <ServiceList />

      {/* Section Booking Lagi (CTA) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[48px] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Siap Untuk Relaksasi?</h2>
            <p className="text-emerald-100/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Terapis profesional kami siap meluncur ke lokasi Anda di seluruh area Lumajang. Cukup klik tombol di bawah untuk janji temu.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/booking" className="w-full md:w-auto bg-white text-emerald-900 px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all">
                Booking Sekarang
              </Link>
              <a href="https://wa.me/628123456789" target="_blank" className="text-white font-bold flex items-center gap-2 hover:underline">
                Chat WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot tetap ada */}
      <Chatbot />
    </main>
  );
}