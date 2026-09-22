import React from 'react';

export default function Pricing() {
  return (
    <section id="precos" className="px-6 py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-4 text-balance">
            Cresce junto com a sua frota
          </h2>
          <p className="text-lg text-slate-600">
            Escolha o plano que faz sentido para o tamanho da sua operação hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <PriceCard
            name="Autônomo"
            price="R$ 79"
            period="por mês / 1 van"
            description="Ideal para o motorista que gerencia sua própria rota."
            features={['Rastreamento ao vivo', 'Lista de embarque digital', 'Avisos automáticos aos pais', 'Suporte por e-mail']}
          />
          <PriceCard
            name="Frota"
            price="R$ 249"
            period="por mês / até 8 vans"
            description="O controle total para quem administra múltiplas rotas."
            features={['Tudo do plano Autônomo', 'Painel de gestão central', 'Relatórios de pontualidade', 'Suporte prioritário WhatsApp']}
            highlight={true}
          />
          <PriceCard
            name="Rede"
            price="Personalizado"
            period="frotas grandes e escolas"
            description="Integração profunda e gestão em larga escala."
            features={['Múltiplos gestores', 'API para sistemas escolares', 'Gestor de conta dedicado', 'Treinamento presencial']}
          />
        </div>
      </div>
    </section>
  );
}

function PriceCard({ name, price, period, description, features, highlight = false }) {
  return (
    <div
      className={`relative rounded-3xl p-8 ${
        highlight 
          ? 'bg-slate-950 text-white shadow-2xl shadow-slate-900/20 scale-105 border border-slate-800 z-10' 
          : 'bg-white text-slate-950 border border-slate-200 shadow-sm'
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB020] text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Mais escolhido
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-6 h-10 ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
      
      <div className="mb-8">
        <span className="text-4xl font-extrabold tracking-tight">{price}</span>
        <span className={`text-sm ml-2 ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{period}</span>
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold transition-all mb-8 ${
          highlight 
            ? 'bg-white text-slate-950 hover:bg-slate-100' 
            : 'bg-slate-100 text-slate-950 hover:bg-slate-200'
        }`}
      >
        Começar agora
      </button>

      <ul className="space-y-4">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <svg className={`w-5 h-5 shrink-0 ${highlight ? 'text-[#FFB020]' : 'text-[#1B8A5A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlight ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}