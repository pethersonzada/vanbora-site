import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-20 pb-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[56px] md:text-[76px] leading-[1.02] font-extrabold tracking-tight text-slate-950">
          Vá mais longe,{' '}
          <span className="inline-flex items-center bg-[#feb723] text-[#0E1524] px-4 py-1 rounded-2xl align-middle">
            junto
          </span>
          .
        </h1>

        <p className="mt-7 text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
          Rastreie a van, confirme quem embarcou e avise a família, tudo automático.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button className="bg-[#feb723] text-[#0E1524] px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-[#f5aa10] active:scale-[0.98] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1524]">
            Agendar demonstração
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1524]">
            Ver como funciona
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 relative">
        <div className="rounded-2xl border border-slate-200 shadow-[0_30px_60px_-15px_rgba(254,183,35,0.28)] overflow-hidden bg-white">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="mx-auto text-xs text-slate-400">vanbora.app/rotas</span>
          </div>

          <div className="flex h-[360px]">
            <div className="hidden sm:block w-48 bg-[#0E1524] px-4 py-5 text-slate-300 text-sm shrink-0">
              <p className="text-white font-semibold mb-5">Rota 12 · Manhã</p>
              <div className="space-y-1">
                <SidebarItem label="Rotas ativas" active />
                <SidebarItem label="Motoristas" />
                <SidebarItem label="Relatórios" />
                <SidebarItem label="Responsáveis" />
              </div>
            </div>

            <div className="relative flex-1 bg-slate-50">
              <svg viewBox="0 0 400 280" className="w-full h-full">
                <path
                  d="M40 220 C 100 180, 140 140, 190 120 S 280 70, 350 50"
                  stroke="#feb723"
                  strokeWidth="4"
                  strokeDasharray="1 10"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="40" cy="220" r="6" fill="#1B8A5A" />
                <circle cx="190" cy="120" r="7" fill="#feb723" stroke="#0E1524" strokeWidth="2" />
                <circle cx="350" cy="50" r="6" fill="#0E1524" />
              </svg>

              <div className="absolute top-6 right-6 bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-3 w-52">
                <p className="text-xs text-slate-400 mb-1">18:32</p>
                <p className="text-sm font-semibold text-slate-950">Embarque confirmado</p>
                <p className="text-xs text-slate-500">Maria S. na Av. Principal</p>
              </div>

              <div className="absolute bottom-6 left-6 sm:left-8 bg-white border border-slate-200 border-l-4 border-l-[#feb723] rounded-xl shadow-sm px-4 py-3 w-52">
                <p className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#feb723]" />
                  Ao vivo
                </p>
                <p className="text-sm font-semibold text-slate-950">Faltam 2 paradas</p>
                <p className="text-xs text-slate-500">Chegada estimada às 19:24</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 pb-6">
        <p className="text-center text-xs uppercase tracking-wide text-slate-400 mb-5">
          Feito para quem roda todo santo dia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-400 font-semibold text-sm">
          <span>Vans escolares</span>
          <Dot />
          <span>Fretados universitários</span>
          <Dot />
          <span>Transporte corporativo</span>
          <Dot />
          <span>Cooperativas de motoristas</span>
        </div>
      </div>
    </section>
  );
}

function SidebarItem({ label, active = false }) {
  return (
    <div
      className={`px-3 py-1.5 rounded-md border-l-2 ${
        active
          ? 'bg-white/10 text-white font-medium border-[#feb723]'
          : 'border-transparent'
      }`}
    >
      {label}
    </div>
  );
}

function Dot() {
  return <span className="w-1 h-1 rounded-full bg-[#feb723] hidden sm:block" />;
}