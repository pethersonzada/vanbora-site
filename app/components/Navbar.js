'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '#funcionalidades', label: 'Como funciona' },
  { href: '#beneficios', label: 'Para quem é' },
  { href: '#precos', label: 'Preços' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || open
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_12px_rgba(15,23,42,0.05)]'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <nav
        aria-label="Principal"
        className="max-w-6xl mx-auto px-6 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center"
      >
        <Link
          href="/"
          className="justify-self-start rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E1524]"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1b2740]">
            <Image
              src="/images/logo-app-icon.png"
              alt="VanBora"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#0E1524]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="justify-self-end flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-colors focus-visible:outline-2 focus-visible:outline-[#0E1524]"
          >
            Fazer login
          </Link>
          <Link
            href="#precos"
            className="hidden sm:inline-flex items-center rounded-full bg-[#0E1524] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#1B2740] hover:shadow-md active:scale-[0.98] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1524]"
          >
            Agendar demonstração
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden -mr-2 p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-slate-700 border-b border-slate-100"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-700">
            Fazer login
          </Link>
          <Link
            href="#precos"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#0E1524] px-5 py-3 text-center text-sm font-medium text-white"
          >
            Agendar demonstração
          </Link>
        </div>
      </div>
    </header>
  );
}