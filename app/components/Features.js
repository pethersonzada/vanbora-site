import React from 'react';

export default function Features() {
  return (
    <>
      <section id="funcionalidades" className="relative px-6 py-28 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(27,138,90,0.06), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,176,32,0.08), transparent 40%), #FAFAF9',
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight mb-5">
              Tudo que a rota precisa,
              <br />
              <span className="text-[#feb723]">
                sem precisar de mágica.
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Cada função existe pra resolver um problema real de quem dirige, gerencia
              ou espera a van chegar em segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <FeatureCard
              icon={<PinIcon />}
              title="Rastreamento ao vivo"
              text="Veja a van no mapa em tempo real, com horário estimado de chegada pra cada parada."
            />
            <FeatureCard
              icon={<CheckIcon />}
              title="Embarque confirmado"
              text="Cada passageiro é marcado na lista ao subir e descer, sem papel e sem contar de cabeça."
            />
            <FeatureCard
              icon={<BellIcon />}
              title="Avisos automáticos"
              text="Atraso, mudança de rota ou imprevisto: quem precisa saber, sabe em segundos."
            />
            <FeatureCard
              icon={<RouteIcon />}
              title="Rota já otimizada"
              text="O melhor caminho é calculado antes de sair da garagem, considerando trânsito e paradas."
            />
            <FeatureCard
              icon={<ChartIcon />}
              title="Relatório de pontualidade"
              text="Acompanhe o histórico de horários e enxergue rápido onde os atrasos se repetem."
            />
            <FeatureCard
              icon={<ClockIcon />}
              title="Histórico completo"
              text="Toda viagem fica registrada: quem embarcou, em que horário e em qual parada."
            />
          </div>
        </div>
      </section>

    </>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-slate-100 rounded-2xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-950 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="#0E1524" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="2.5" stroke="#0E1524" strokeWidth="1.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#0E1524" strokeWidth="1.8" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="#0E1524" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 4a5 5 0 00-5 5v3l-2 4h14l-2-4V9a5 5 0 00-5-5z" stroke="#0E1524" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 19a2.5 2.5 0 005 0" stroke="#0E1524" strokeWidth="1.8" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2" stroke="#0E1524" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="2" stroke="#0E1524" strokeWidth="1.8" />
      <path d="M6 8v4a4 4 0 004 4h4" stroke="#0E1524" strokeWidth="1.8" strokeDasharray="2 3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V10M12 20V4M20 20v-7" stroke="#0E1524" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#0E1524" strokeWidth="1.8" />
      <path d="M12 8v4l3 2" stroke="#0E1524" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}


function AudienceCard({ audience, items, accent }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200" style={{ borderTopWidth: '3px', borderTopColor: accent }}>
      <h3 className="text-lg font-bold text-slate-950 mb-5">{audience}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: accent }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}