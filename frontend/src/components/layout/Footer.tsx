export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Kolom 1: Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-4 text-emerald-400">SENZIA</h3>
          <p className="text-slate-400 leading-relaxed">
            Layanan relaksasi profesional terpercaya di Lumajang. Menghadirkan ketenangan spa langsung ke depan pintu rumah Anda.
          </p>
        </div>

        {/* Kolom 2: Kontak */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Kontak Kami</h4>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-2">📍 Jl. Kyai Muksin, Lumajang</li>
            <li className="flex items-center gap-2">📞 +62 812-3456-7890</li>
            <li className="flex items-center gap-2">✉️ info@spalmj.com</li>
          </ul>
        </div>

        {/* Kolom 3: Jam Operasional */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Jam Operasional</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Senin - Jumat: 09:00 - 20:00</li>
            <li>Sabtu - Minggu: 10:00 - 18:00</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; 2026 SENZIA SPA Lumajang. All rights reserved.</p>
      </div>
    </footer>
  );
}