"use client";
import React from 'react';

export default function BookingPage() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#064e3b' }}>Reservasi Senzia Spa</h1>
      <p>Silakan hubungi WhatsApp kami untuk booking.</p>
      <a href="https://wa.me/628123456789" style={{ background: '#064e3b', color: 'white', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
        Hubungi WhatsApp
      </a>
    </div>
  );
}
