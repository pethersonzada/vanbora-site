import React from 'react';
import Link from 'next/link';

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-950 transition">
            &larr; Voltar para a página inicial
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Termos de Uso e Política de Privacidade
        </h1>
        <p className="text-sm text-slate-500 mb-10">Última atualização: 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">1. Aceitação dos termos</h2>
            <p>
              Ao usar o VanBora, seja pelo site ou pelo aplicativo, você concorda com as condições
              descritas aqui. Se algo neste documento não fizer sentido pra você, entre em contato
              antes de continuar usando a plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">2. Sobre o VanBora</h2>
            <p>
              O VanBora é uma plataforma de rastreamento e gestão de rotas de transporte escolar
              que conecta motoristas, gestores de frota e responsáveis por estudantes num só lugar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">3. Privacidade e dados</h2>
            <p>
              Levamos a sério a segurança dos dados de rota, presença e cadastro. Essas informações
              são usadas apenas para garantir que o transporte contratado funcione com segurança e
              eficiência, seguindo a legislação de proteção de dados em vigor no Brasil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">4. Propriedade intelectual</h2>
            <p>
              O código-fonte, a marca, o layout e os demais elementos do VanBora pertencem aos seus
              criadores. Reprodução, engenharia reversa ou distribuição não autorizada desses ativos
              não é permitida.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-950">5. Contato</h2>
            <p>
              Dúvidas ou solicitações sobre estes termos podem ser enviadas pelos canais oficiais
              informados dentro do próprio aplicativo.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}