import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#090D16] text-slate-400 text-sm border-t border-slate-800">
      {/* CTA final */}
      <div className="px-6 py-24 text-center bg-[#0E1524]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Pronto para otimizar a sua rota?
          </h2>
          <p className="text-slate-300 mb-9">
            Quinze minutos de conversa mostram se o VanBora resolve o seu dia a dia. Sem compromisso.
          </p>
          <button className="bg-[#FFB020] text-[#0E1524] px-8 py-3.5 rounded-md font-semibold hover:bg-[#FFC750] transition">
            Agendar demonstração gratuita
          </button>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} VanBora. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <Link href="/termos" className="text-slate-300 hover:text-white transition underline">
            Termos de Uso e Privacidade
          </Link>
        </div>
      </div>
      <div className="text-center pb-8 text-xs text-slate-500">
        Tecnologia para um trajeto seguro. Desenvolvido por Miguel Petherson | Maria Rafaela | Arthur Almeida | Yalle Rívika.
      </div>
    </footer>
  );
}