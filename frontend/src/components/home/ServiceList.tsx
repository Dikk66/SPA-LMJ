import Link from 'next/link';
import Image from 'next/image';

const services = [
  { 
    id: 'tradisional',
    name: 'Pijat Tradisional', 
    price: '95.000', 
    desc: 'Teknik urut tradisional untuk pegal-pegal dan masuk angin.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500',
    tag: 'Favorite'
  },
  { 
    id: 'refleksi',
    name: 'Refleksi Kaki', 
    price: '70.000', 
    desc: 'Relaksasi instan fokus pada titik saraf kaki. Cocok untuk kebugaran.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbEvGkL5GHyB_s4hjL-u1HqrMIcHMerdjrA&s',
    tag: 'Best Value'
  },
  { 
    id: 'spa-lulur',
    name: 'Full Body Spa & Lulur', 
    price: '165.000', 
    desc: 'Perawatan lengkap pembersihan kulit dan relaksasi total.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZX82obPIgzAY5unk2m_3-CRbXS05uyWEJA&s'
  },
  { 
    id: 'ibu-anak',
    name: 'Pijat Ibu & Anak', 
    price: '135.000', 
    desc: 'Pijat lembut khusus untuk kenyamanan ibu dan si kecil.',
    img: 'https://nusindo.id/wp-content/uploads/2024/12/Mengapa-Mom-and-Baby-Spa-Menjadi-Tren-di-Kalangan-Ibu-Muda.jpg'
  },
  { 
    id: 'hot-stone',
    name: 'Hot Stone Therapy', 
    price: '190.000', 
    desc: 'Terapi batu hangat untuk melancarkan sirkulasi darah dan otot kaku.',
    img: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500'
  },
  { 
    id: 'facial',
    name: 'Facial Relaksasi', 
    price: '110.000', 
    desc: 'Pijat wajah dan masker untuk kulit lebih cerah dan kencang.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500'
  }
];

export default function ServiceList() {
  return (
    /* id="layanan" ditambahkan di sini agar navigasi dari navbar berfungsi */
    <section id="layanan" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-4">Layanan Senzia</h2>
          <p className="text-slate-500 max-w-lg mx-auto font-medium">
            Kualitas bintang lima dengan harga yang bersahabat bagi warga Lumajang.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gambar Layanan */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {s.tag && (
                  <span className="absolute top-5 left-5 bg-emerald-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {s.tag}
                  </span>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {s.name}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">
                  {s.desc}
                </p>
                <div className="flex justify-between items-center border-t border-slate-50 pt-6">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-black tracking-tighter">Mulai Dari</span>
                    <span className="text-2xl font-bold text-emerald-900">Rp {s.price}</span>
                  </div>
                  <Link 
                    href={`/booking?service=${s.id}`} 
                    className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl group-hover:bg-emerald-900 group-hover:text-white transition-all shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}