import React from 'react';

export default function Pricing() {
  return (
    <section id="precos" className="px-6 py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 mb-4">
            Um plano pra cada tamanho de operação
          </h2>
          <p className="text-lg text-slate-500">
            De uma van só até uma frota inteira, sem pagar por recurso que você não usa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <PriceCard
            name="Autônomo"
            price="R$ 79"
            period="por mês / 1 van"
            description="Pra quem dirige e gerencia a própria rota, sem intermediário."
            features={['Rastreamento ao vivo', 'Lista de embarque digital', 'Avisos automáticos aos responsáveis', 'Suporte por e-mail']}
          />
          <PriceCard
            name="Frota"
            price="R$ 249"
            period="por mês / até 8 vans"
            description="Pra quem administra várias rotas e quer ver tudo num lugar só."
            features={['Tudo do plano Autônomo', 'Painel de gestão central', 'Relatórios de pontualidade', 'Suporte prioritário no WhatsApp']}
            highlight={true}
          />
          <PriceCard
            name="Rede"
            price="Sob consulta"
            period="frotas grandes e escolas"
            description="Pra redes de ensino e operações que precisam de integração à parte."
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
      className={`relative rounded-2xl p-8 border ${
        highlight ? 'border-[#1B8A5A] bg-[#F4FBF7]' : 'border-slate-200 bg-white'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-8 bg-[#1B8A5A] text-white text-xs font-semibold px-3 py-1 rounded-full">
          A maioria escolhe este
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-950 mb-2">{name}</h3>
      <p className="text-sm text-slate-500 mb-6 h-10">{description}</p>

      <div className="mb-8">
        <span className="text-4xl font-extrabold tracking-tight text-slate-950">{price}</span>
        <span className="text-sm text-slate-500 ml-2">{period}</span>
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold transition-all mb-8 ${
          highlight
            ? 'bg-[#1B8A5A] text-white hover:bg-[#166F49]'
            : 'bg-slate-100 text-slate-950 hover:bg-slate-200'
        }`}
      >
        Começar agora
      </button>

      <ul className="space-y-4">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <svg className="w-5 h-5 shrink-0 text-[#1B8A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-600">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}