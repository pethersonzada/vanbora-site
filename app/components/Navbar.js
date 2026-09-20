import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image 
            src="/images/logo-app-sem-fundo-sem-titulo.png" 
            alt="VanBora Logo" 
            width={60} 
            height={60} 
            className="rounded-md object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-950">VanBora</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <Link href="#funcionalidades" className="hover:text-slate-950 transition">Funcionalidades</Link>
          <Link href="#beneficios" className="hover:text-slate-950 transition">Benefícios</Link>
          <Link href="#precos" className="hover:text-slate-950 transition">Preços</Link>
        </div>
        <Link
          href="/login"
          className="bg-[#0E1524] text-white px-5 py-2.5 rounded-md hover:bg-[#1B2740] transition text-sm font-medium"
        >
          Área do gestor
        </Link>
      </nav>
    </header>
  );
}