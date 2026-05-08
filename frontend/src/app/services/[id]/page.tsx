import Navbar from '@/components/layout/Navbar';
import ServiceList from '@/components/home/ServiceList';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Halaman */}
      <div className="bg-emerald-900 pt-32 pb-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Pilihan Layanan Kami</h1>
        <p className="text-emerald-100 max-w-2xl mx-auto">
          Dari pijat tradisional hingga perawatan tubuh lengkap, temukan layanan yang paling sesuai dengan kebutuhan relaksasi Anda.
        </p>
      </div>

      {/* Gunakan komponen ServiceList yang sudah ada agar konsisten */}
      <div className="py-10">
        <ServiceList />
      </div>
    </main>
  );
}