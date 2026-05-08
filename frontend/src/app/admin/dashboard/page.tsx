"use client";
import React from 'react';

// Data dummy (nanti ini ditarik dari API NestJS temanmu)
const MOCK_BOOKINGS = [
  { id: 1, name: "Budi Santoso", service: "Pijat Tradisional", date: "2026-05-10", time: "14:00", status: "Pending", address: "Jl. Kyai Muksin, Lumajang" },
  { id: 2, name: "Siti Aminah", service: "Spa & Aromaterapi", date: "2026-05-11", time: "10:00", status: "Confirmed", address: "Sukodono, Lumajang" },
  { id: 3, name: "Agus Salim", service: "Refleksi Kaki", date: "2026-05-10", time: "19:00", status: "Cancelled", address: "Senduro, Lumajang" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      {/* Header Dashboard */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500 text-sm">Kelola pesanan masuk SPA LMJ</p>
        </div>
        <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
          Admin: Dikk66 & You
        </div>
      </div>

      {/* Ringkasan Statistik */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm uppercase font-bold tracking-wider">Total Booking</p>
          <p className="text-3xl font-bold text-emerald-700">128</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm uppercase font-bold tracking-wider">Pending</p>
          <p className="text-3xl font-bold text-orange-500">5</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm uppercase font-bold tracking-wider">Pendapatan Bln Ini</p>
          <p className="text-3xl font-bold text-slate-800">Rp4.200k</p>
        </div>
      </div>

      {/* Tabel Pesanan */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-700">Pesanan Terbaru</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Pelanggan</th>
                <th className="px-6 py-4">Layanan</th>
                <th className="px-6 py-4">Jadwal</th>
                <th className="px-6 py-4">Alamat</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {MOCK_BOOKINGS.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-semibold text-slate-700">{booking.name}</td>
                  <td className="px-6 py-4 text-slate-600">{booking.service}</td>
                  <td className="px-6 py-4 text-slate-600">{booking.date} <span className="block text-xs text-slate-400">{booking.time} WIB</span></td>
                  <td className="px-6 py-4 text-slate-50 text-xs text-slate-600 max-w-[150px] truncate">{booking.address}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 
                      booking.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-emerald-600 font-bold cursor-pointer hover:underline">Detail</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}