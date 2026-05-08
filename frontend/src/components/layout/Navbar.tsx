"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Memaksa pindah ke halaman utama dan scroll ke paling atas
    router.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-[100] top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-18 h-20 flex justify-between items-center">
        
        {/* LOGO & BERANDA - Dipaksa Fungsi Kliknya */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-18 h-18 overflow-hidden rounded-full border border-emerald-100 shadow-inner bg-emerald-50 transition-transform group-hover:scale-110">
            {/* CATATAN PENTING UNTUK MACBOOK KAMU:
               1. Pastikan file gambar ada di folder: /public/logo-senzia.png
               2. Nama file harus persis (huruf kecil semua).
               3. Jika gambar tetap tidak muncul, coba ganti src ke "/logo-senzia.png?v=1" 
            */}
            <Image 
              src="/logo-senzia.png"
              alt="Senzia Logo" 
              fill 
              className="object-cover"
              priority
              sizes="48px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tighter text-emerald-900 leading-none">SENZIA</span>
            <span className="text-[8px] tracking-[0.3em] text-amber-600 font-bold uppercase">Spa & Wellness</span>
          </div>
        </div>

        {/* MENU NAVIGASI */}
        <div className="hidden md:flex items-center space-x-10">
          <Link 
            href="/" 
            className="text-sm font-bold text-emerald-900 hover:text-amber-600 transition-colors"
          >
            Beranda
          </Link>
          
          {/* Navigasi Scroll ke ID Layanan */}
          <a 
            href="#layanan" 
            className="text-sm font-semibold text-slate-600 hover:text-emerald-900 transition-colors"
          >
            Layanan
          </a>
          
          <Link 
            href="/booking" 
            className="bg-emerald-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
          >
            Booking Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}