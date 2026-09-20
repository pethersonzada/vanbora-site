import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-20 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <p className="text-sm text-slate-500 mb-5">Para motoristas, rotas e estudantes universitários</p>
          <h1
            className="text-5xl md:text-[3.6rem] leading-[0.95] text-slate-950 mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}
          >
            VÁ MAIS LONGE, JUNTO.
          </h1>
          <p className="text-lg text-slate-600 max-w-md mb-9 leading-relaxed">
            Acompanhe a van em tempo real até a faculdade, confirme a presença com um toque
            e mantenha todo o trajeto organizado com o VanBora.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-[#0E1524] text-white px-7 py-3.5 rounded-md font-medium hover:bg-[#1B2740] transition">
              Agendar demonstração
            </button>
            <button className="text-slate-900 font-medium border-b border-slate-300 hover:border-slate-900 transition pb-0.5">
              Ver como funciona
            </button>
          </div>
        </div>

        {/* Diagrama de rota animado */}
        <div className="relative pl-10 py-4">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#0E1524]/15 route-line" />
          <div className="space-y-14">
            <RouteStop
              time="18:30"
              label="Embarque confirmado"
              detail="Maria S. — Ponto da Av. Principal"
              dotColor="#1B8A5A"
            />
            <RouteStop
              time="19:05"
              label="Em trajeto para o campus"
              detail="Localização ao vivo — 2 paradas restantes"
              dotColor="#FFB020"
              pulse={true}
            />
            <RouteStop
              time="19:25"
              label="Chegada na faculdade"
              detail="Destino final alcançado com segurança"
              dotColor="#0E1524"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteStop({ time, label, detail, dotColor, pulse = false }) {
  return (
    <div className="relative route-stop">
      <div
        className="absolute -left-[34px] top-1 w-3.5  h-3.5 rounded-full border-2 border-white"
        style={{ backgroundColor: dotColor, boxShadow: pulse ? `0 0 0 4px ${dotColor}22` : 'none' }}
      />
      <p className="text-xs text-slate-400 mb-1">{time}</p>
      <p className="font-semibold text-slate-950">{label}</p>
      <p className="text-sm text-slate-500">{detail}</p>
    </div>
  );
}