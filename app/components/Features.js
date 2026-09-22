import React from 'react';

export default function Features() {
  return (
    <>
      {/* Funcionalidades */}
      <section id="funcionalidades" className="px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-4">
              O que muda no dia a dia da rota
            </h2>
            <p className="text-lg text-slate-600">
              Melhore a sua rota, economize combustível, ganhe tempo e ajude o planeta.
            </p>
          </div>

          <FeatureRow
            title="Rastreamento ao vivo, sem ligar pra ninguém"
            text="O responsável abre o app do VanBora e vê a van no mapa, com o horário estimado de chegada. Sem grupo de WhatsApp perguntando 'já saiu?'."
            accent="#1B8A5A"
            icon={<TrackingIcon />}
            reverse={false}
          />
          <FeatureRow
            title="Embarque e desembarque confirmados via app"
            text="O app marca cada passageiro na lista ao subir e descer da van. Se alguém não embarcar, o responsável é avisado na hora, não no fim do dia."
            accent="#FFB020"
            icon={<ChecklistIcon />}
            reverse={true}
          />
          <FeatureRow
            title="Aviso automático pra quem precisa saber"
            text="Chegada, atraso, mudança de rota: a alteração é feita na hora e em tempo real."
            accent="#0E1524"
            icon={<AlertIcon />}
            reverse={false}
          />
        </div>
      </section>

      {/* Benefícios por público */}
      <section id="beneficios" className="bg-slate-50 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-16">
            Pensado pra quem vive a rota
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <AudienceCard
              audience="Motorista"
              accent="#1B8A5A"
              items={[
                'Lista de embarque na tela, sem papel',
                'Rota otimizada antes de sair da garagem',
                'Um toque pra avisar atraso ou imprevisto',
              ]}
            />
            <AudienceCard
              audience="Gestor da van/frota"
              accent="#FFB020"
              items={[
                'Painel com todas as rotas em um só lugar',
                'Histórico de pontualidade por motorista',
                'Alertas automáticos de rota fora do previsto',
              ]}
            />
            <AudienceCard
              audience="Responsável"
              accent="#0E1524"
              items={[
                'Localização da van em tempo real',
                'Confirmação de embarque e chegada',
                'Contato direto com o motorista pelo app',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureRow({ title, text, accent, icon, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-10 items-center py-14 border-t border-slate-200 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <div
        className="aspect-[4/3] rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `${accent}0D`, border: `1px solid ${accent}33` }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-950 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function TrackingIcon() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
      <path d="M60 14C46 14 35 25 35 39c0 20 25 47 25 47s25-27 25-47c0-14-11-25-25-25z" stroke="#1B8A5A" strokeWidth="2" fill="none" />
      <circle cx="60" cy="39" r="8" fill="#1B8A5A" />
      <circle cx="60" cy="86" r="3" fill="#1B8A5A" opacity="0.3" />
      <circle cx="60" cy="86" r="14" stroke="#1B8A5A" strokeWidth="1" opacity="0.25" />
      <circle cx="60" cy="86" r="24" stroke="#1B8A5A" strokeWidth="1" opacity="0.12" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
      <rect x="28" y="18" width="64" height="64" rx="4" stroke="#FFB020" strokeWidth="2" fill="none" />
      <rect x="44" y="12" width="32" height="12" rx="2" fill="#FFB020" />
      {[32, 50, 68].map((y, i) => (
        <g key={y}>
          <rect x="38" y={y - 5} width="10" height="10" rx="2" stroke="#FFB020" strokeWidth="1.5" fill={i < 2 ? '#FFB020' : 'none'} />
          {i < 2 && <path d={`M40 ${y} l2.5 2.5 L46 ${y - 3}`} stroke="#fff" strokeWidth="1.4" fill="none" />}
          <rect x="56" y={y - 2} width="26" height="4" rx="2" fill="#0E1524" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
      <path
        d="M60 22c-16 0-20 12-20 22v14l-6 10h52l-6-10V44c0-10-4-22-20-22z"
        stroke="#0E1524"
        strokeWidth="2"
        fill="none"
      />
      <path d="M52 74a8 8 0 0016 0" stroke="#0E1524" strokeWidth="2" fill="none" />
      <circle cx="82" cy="26" r="10" fill="#FFB020" />
      <path d="M79 26l2 2 4-5" stroke="#0E1524" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function AudienceCard({ audience, items, accent }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200" style={{ borderTopWidth: '3px', borderTopColor: accent }}>
      <h3 className="text-lg font-bold text-slate-950 mb-5">{audience}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: accent }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}