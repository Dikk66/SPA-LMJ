"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi login (Nanti Dikk66 yang buat API real-nya di NestJS)
    setTimeout(() => {
      if (email === 'admin@spalmj.com' && password === 'admin123') {
        router.push('/admin/dashboard');
      } else {
        alert('Email atau Password salah, Bro!');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <Link href="/" className="font-serif text-3xl font-bold text-emerald-800">
            SPA LMJ
          </Link>
          <p className="text-slate-500 mt-2 text-sm">Halaman Khusus Administrator</p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Masuk ke Dashboard</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Admin</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" 
                placeholder="admin@spalmj.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
                loading ? 'bg-slate-400' : 'bg-emerald-700 hover:bg-emerald-800'
              }`}
            >
              {loading ? 'Mengecek...' : 'Masuk Sekarang'}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 text-xs mt-8">
          &copy; 2026 SPA LMJ Team. Lupa password? Hubungi IT Support.
        </p>
      </div>
    </main>
  );
}