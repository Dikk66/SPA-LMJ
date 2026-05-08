"use client";
import { useSearchParams } from 'next/navigation';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service') || '';

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-slate-100">
      <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-2 text-center">Reservasi Senzia</h2>
      <p className="text-slate-500 text-center mb-10 text-sm">Layanan pijat panggilan profesional Lumajang.</p>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-bold text-emerald-900 mb-2">Pilih Layanan</label>
          <select 
            defaultValue={selectedService}
            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
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
          <input type="text" placeholder="Nama Lengkap" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none" />
          <input type="tel" placeholder="Nomor WhatsApp" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 outline-none" />
        </div>

        <textarea placeholder="Alamat Lengkap di Lumajang" className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 h-32 outline-none"></textarea>

        <button type="button" className="w-full bg-emerald-900 text-white py-5 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-800 transition-all">
          Konfirmasi via WhatsApp
        </button>
      </form>
    </div>
  );
}