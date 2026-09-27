import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-app-sem-fundo-sem-titulo.png"
              alt="VanBora"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-[15px] font-bold tracking-tight text-slate-950">VanBora</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-[14px] text-slate-600">
            <Link href="#funcionalidades" className="hover:text-slate-950 transition">Como funciona</Link>
            <Link href="#beneficios" className="hover:text-slate-950 transition">Para quem é</Link>
            <Link href="#precos" className="hover:text-slate-950 transition">Preços</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/login" className="hidden sm:block text-[14px] font-medium text-slate-600 hover:text-slate-950 transition">
            Entrar
          </Link>
          <Link
            href="#precos"
            className="bg-[#1B8A5A] text-white px-4 py-2 rounded-lg text-[14px] font-semibold hover:bg-[#166F49] transition"
          >
            Agendar demonstração
          </Link>
        </div>
      </nav>
    </header>
  );
}