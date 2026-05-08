export default function WhatsAppButton() {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WA admin Lumajang
  const message = "Halo SPA LMJ, saya ingin tanya tentang layanan pijatnya.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95 group"
      aria-label="Chat WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 4.7 1.4L22 3z"/>
      </svg>
      
      {/* Tooltip kecil saat dihover */}
      <span className="absolute left-16 bg-white text-slate-800 text-xs font-bold px-3 py-1 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Tanya Admin (WA)
      </span>
    </a>
  );
}