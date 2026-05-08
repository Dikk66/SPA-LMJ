"use client";
import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Halo Bro/Sist! Saya asisten Senzia. Mau tanya soal layanan pijat atau harga di Lumajang?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      // API Key yang kamu berikan sebelumnya
      const GEMINI_KEY = "AIzaSyChaayWLOgOmAIaEjS45NNPaVbFooSN9vc"; 
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ 
              text: `Kamu adalah 'Senzia AI', asisten chatbot profesional untuk SENZIA Spa & Wellness di Lumajang. 
              Gaya bicara: Ramah, santai tapi sopan, panggil user dengan 'Bro' atau 'Sist'.
              
              DATA LAYANAN KAMI:
              1. Pijat Tradisional: Rp 95.000
              2. Refleksi Kaki: Rp 70.000
              3. Full Body Spa & Lulur: Rp 165.000
              4. Pijat Ibu & Anak: Rp 135.000
              5. Hot Stone: Rp 190.000
              6. Facial: Rp 110.000
              
              INFORMASI PENTING:
              - Lokasi: Kami layanan panggilan ke seluruh wilayah Lumajang.
              - Jam Operasional: Setiap hari 08.00 - 21.00.
              - Keunggulan: Terapis profesional, peralatan bersih, harga terjangkau.
              
              Tugasmu: Menjawab pertanyaan user berdasarkan data di atas. Jika user tanya selain spa, jawab dengan sopan bahwa kamu hanya asisten Senzia.
              
              Pertanyaan User: ${currentInput}` 
            }]
          }]
        })
      });

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { role: 'ai', text: aiText }]);

    } catch (error) {
      setMessages((prev) => [...prev, { role: 'ai', text: "Waduh, koneksi lagi kurang oke nih Bro. Coba tanya lagi ya!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    // ... (Gunakan kode UI Chatbot yang lama, bagian logikanya saja yang diganti)
    <div className="fixed bottom-6 right-6 z-[60]">
       {/* UI yang sama dengan sebelumnya */}
       {/* ... silakan copy UI Chatbot yang saya kirim di awal tadi ... */}
    </div>
  );
}