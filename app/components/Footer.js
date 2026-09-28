import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 text-sm border-t border-slate-100">
      <div className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 mb-6">
            Bora ver se o VanBora encaixa na sua rotina?
          </h2>
          <p className="text-slate-500 mb-9">
            Quinze minutos de conversa já mostram se ele resolve o seu dia a dia. Sem compromisso, sem letra miúda.
          </p>
          <button className="bg-[#0E1524] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#1B2740] transition">
            Marcar uma conversa
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} VanBora. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <Link href="/termos" className="hover:text-slate-950 transition underline">
            Termos de Uso e Privacidade
          </Link>
        </div>
      </div>
      <div className="text-center pb-8 text-xs text-slate-400">
        Feito por Miguel Petherson, Maria Rafaela, Arthur Almeida e Yalle Rívika.
      </div>
    </footer>
  );
}