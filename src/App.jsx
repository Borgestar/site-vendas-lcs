import React, { useState } from 'react'; // Adicionado useState
import logoImg from './assets/logo.png'; 

// Prints do sistema (Certifique-se de ter as imagens na pasta assets)
import print1 from './assets/print1.png'; 
import print2 from './assets/print2.png'; 
import print3 from './assets/print3.png'; 

export default function App() {
  // --- ESTADO PARA O LIGHTBOX (ZOOM) ---
  const [selectedImage, setSelectedImage] = useState(null);

  // --- CONFIGURAÇÃO DO WHATSAPP ---
  const whatsappNumber = "5521979779313"; 

  // Mensagens Personalizadas
  const msgBasico = "Olá! Quero contratar a gestão da LCS no *Plano Básico* (R$ 550).";
  const msgPro = "Olá! Quero contratar a gestão da LCS no *Plano Profissional* (R$ 700).";
  const msgVip = "Olá! Quero contratar a gestão completa no *Plano VIP* (R$ 1.500).";
  const msgCodigo = "Olá! Sou desenvolvedor/empresa e tenho interesse em negociar o *Código Fonte*.";

  // Links Automáticos
  const linkBasico = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgBasico)}`;
  const linkPro = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgPro)}`;
  const linkVip = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgVip)}`;
  const linkCodigo = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgCodigo)}`;
  
  const linkLogin = "https://www.lcshub.com.br"; 

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="LCS Hub" className="h-10 object-contain brightness-0 invert" />
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-white transition">Como Funciona</a>
            <a href="#funcionalidades" className="hover:text-white transition">O que Entregamos</a>
            <a href="#planos" className="hover:text-white transition">Planos de Gestão</a>
            <a href="#economia" className="hover:text-white transition text-emerald-400">Economia</a>
          </div>
          <a href={linkLogin} className="px-5 py-2 bg-white/10 rounded-full text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all">
            Área do Cliente
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-wide uppercase mb-6">
          BPO Financeiro e Administrativo
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Sua empresa organizada <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">sem você digitar nada.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nós fazemos os lançamentos, o controle de estoque e a gestão financeira para você. 
          Pare de perder tempo com planilhas e foque em vender.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#planos" className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all">
            Quero terceirizar minha gestão
          </a>
           <a href="#codigo" className="px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-slate-200 transition-all">
            Sou Desenvolvedor
          </a>
        </div>
      </header>

      {/* --- GALERIA DE PRINTS (COM ZOOM) --- */}
      <section className="py-20 border-y border-white/5 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Você apenas visualiza o resultado</h2>
            <p className="text-slate-400">Nossa equipe opera o sistema. Você recebe o acesso de "Visualizador" para acompanhar os gráficos.</p>
            <p className="text-xs text-indigo-400 mt-2 uppercase tracking-widest font-bold">Clique nas imagens para ampliar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[print1, print2, print3].map((img, index) => (
              <div 
                key={index} 
                onClick={() => img && setSelectedImage(img)} // Abre o modal
                className="group relative rounded-xl overflow-hidden border border-slate-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-indigo-500/20 bg-slate-900 cursor-zoom-in"
              >
                {img ? (
                  <img src={img} alt={`Tela do Sistema ${index + 1}`} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="h-48 flex items-center justify-center text-slate-600 bg-slate-800">
                    Sem imagem (adicione print{index+1}.png)
                  </div>
                )}
                {/* Overlay de instrução */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border border-white/10">🔍 Ampliar</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL (LIGHTBOX) --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)} // Fecha ao clicar fora
        >
          {/* Botão Fechar */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagem Ampliada */}
          <img 
            src={selectedImage} 
            alt="Visualização Ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na imagem
          />
        </div>
      )}

      {/* --- COMO FUNCIONA --- */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Nós trabalhamos, você lucra.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-4xl mb-4">📨</div>
              <h3 className="font-bold text-lg mb-2">1. Envie os Dados</h3>
              <p className="text-slate-400 text-sm">Você nos envia as notas, comprovantes e vendas (físicas ou digitais).</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-4xl mb-4">👩‍💻</div>
              <h3 className="font-bold text-lg mb-2">2. Nós Processamos</h3>
              <p className="text-slate-400 text-sm">Nossa equipe lança tudo no sistema LCS Hub, categoriza despesas e atualiza o estoque.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">3. Você Acompanha</h3>
              <p className="text-slate-400 text-sm">Você acessa seu Dashboard em tempo real para ver o lucro líquido e tomar decisões.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNCIONALIDADES --- */}
      <section id="funcionalidades" className="py-20 bg-slate-800/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">O que nós controlamos para você?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-2xl mb-4 text-indigo-400">📦</div>
              <h3 className="text-xl font-bold mb-2">Estoque Real</h3>
              <p className="text-slate-400">Acabe com o estoque fantasma. Garantimos que o físico bata com o digital, dando baixa item a item.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-2xl mb-4 text-emerald-400">💰</div>
              <h3 className="text-xl font-bold mb-2">Lucro Líquido</h3>
              <p className="text-slate-400">Não olhe apenas o faturamento. Nós calculamos seus custos operacionais para te mostrar o dinheiro que sobra.</p>
            </div>
            <div className="p-8 bg-slate-900 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl mb-4 text-blue-400">📑</div>
              <h3 className="text-xl font-bold mb-2">Relatórios PDF</h3>
              <p className="text-slate-400">Receba mensalmente um dossiê completo da saúde financeira da sua empresa, pronto para impressão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLANOS DE ASSINATURA --- */}
      <section id="planos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Sem dor de cabeça</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Escolha seu nível de Gestão</h2>
            <p className="text-emerald-400 font-semibold bg-emerald-400/10 inline-block px-4 py-1 rounded-full">Taxa de Implantação: GRÁTIS (R$ 0,00)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Básico */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-slate-300">Básico</h3>
              <div className="text-4xl font-bold my-4">R$ 550<span className="text-lg text-slate-500 font-normal">/mês</span></div>
              <p className="text-slate-400 text-sm mb-6">Ideal para sair do caos e organizar a casa.</p>
              <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
                <li className="flex gap-2"><span className="text-indigo-400">●</span> <strong>Nós atualizamos</strong> a cada 15 dias</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Relatório Mensal PDF</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Conciliação de Estoque</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Você visualiza 24h/dia</li>
              </ul>
              <a href={linkBasico} target="_blank" rel="noreferrer" className="w-full py-3 text-center border border-slate-700 rounded-xl hover:bg-slate-800 transition text-slate-300">
                Contratar Básico
              </a>
            </div>

            {/* Profissional */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col hover:border-indigo-500 transition-colors relative z-0">
              <h3 className="text-xl font-bold text-indigo-400">Profissional</h3>
              <div className="text-4xl font-bold my-4">R$ 700<span className="text-lg text-slate-500 font-normal">/mês</span></div>
              <p className="text-slate-400 text-sm mb-6">Para repor estoque com agilidade.</p>
              <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
                <li className="flex gap-2 text-white"><span className="text-indigo-400">●</span> <strong>Nós atualizamos</strong> Semanalmente</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Fechamento de Caixa Semanal</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Gestão de Compras</li>
                <li className="flex gap-2"><span className="text-indigo-400">●</span> Gestão de Kits Completa</li>
              </ul>
              <a href={linkPro} target="_blank" rel="noreferrer" className="w-full py-3 text-center bg-indigo-600/10 border border-indigo-500 text-indigo-400 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition">
                Contratar Pro
              </a>
            </div>

            {/* VIP (AGORA RECOMENDADO) */}
            <div className="p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-emerald-500 rounded-3xl flex flex-col relative scale-105 shadow-2xl shadow-emerald-900/50 z-10">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">RECOMENDADO</div>
              <h3 className="text-xl font-bold text-emerald-400">VIP (Real Time)</h3>
              <div className="text-4xl font-bold my-4">R$ 1.500<span className="text-lg text-slate-500 font-normal">/mês</span></div>
              <p className="text-slate-400 text-sm mb-6">Controle absoluto. Durma tranquilo.</p>
              <ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
                <li className="flex gap-2 text-white"><i className="fas fa-check text-emerald-400"></i> <strong>Atualização Diária</strong> (Seg a Seg)</li>
                <li className="flex gap-2 text-white"><i className="fas fa-check text-emerald-400"></i> Dashboard em Tempo Real</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-400"></i> Auditoria Diária de Estoque</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-400"></i> Prioridade máxima</li>
                <li className="flex gap-2"><i className="fas fa-check text-emerald-400"></i> Economia garantida (Veja abaixo)</li>
              </ul>
              <a href={linkVip} target="_blank" rel="noreferrer" className="w-full py-4 text-center bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
                Contratar VIP
              </a>
            </div>
          </div>
          
          <p className="text-center text-slate-500 mt-10 text-sm">Contrato mínimo de 6 meses para garantir resultados consistentes.</p>
        </div>
      </section>

      {/* --- ECONOMIA REAL (Reposicionado para BAIXO dos planos) --- */}
      <section id="economia" className="py-20 px-6 bg-slate-900 border-t border-white/5 relative">
         <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">Por que sai mais barato contratar a LCS?</h2>
                <p className="text-slate-400 mt-2">Comparativo de custo mensal: Funcionário Próprio vs. LCS Gestão (Plano VIP)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Coluna Funcionário */}
                <div className="space-y-4 opacity-60 hover:opacity-100 transition-all">
                  <h3 className="text-xl font-bold text-red-400 border-b border-red-400/20 pb-2">Funcionário Administrativo</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Salário Base</span> <span>R$ 1.412,00</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Encargos (FGTS/INSS)</span> <span>~ R$ 800,00</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Vale Transporte/Refeição</span> <span>R$ 300,00</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Custo Software de Gestão</span> <span>~ R$ 500,00</span></li>
                  </ul>
                  <div className="pt-2 flex justify-between font-bold text-lg text-red-300">
                    <span>Custo Total Mensal:</span>
                    <span>R$ 3.012,00</span>
                  </div>
                </div>

                {/* Coluna LCS Hub */}
                <div className="bg-indigo-900/20 p-8 rounded-2xl border-2 border-emerald-500/50 relative overflow-hidden transform scale-105">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS INTELIGENTE</div>
                  <h3 className="text-xl font-bold text-emerald-400 border-b border-emerald-400/20 pb-2 mb-4">LCS Gestão (Plano VIP)</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-white font-medium border-b border-white/10 pb-2">
                      <span>Mensalidade Fixa</span>
                      <span className="text-2xl">R$ 1.500,00</span>
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1">
                        <li>✓ Sem encargos trabalhistas</li>
                        <li>✓ Sem vale transporte ou refeição</li>
                        <li>✓ Software de ponta JÁ INCLUSO</li>
                    </ul>
                    
                    <div className="pt-6">
                      <p className="text-sm text-slate-300 text-center mb-1 uppercase tracking-wide">Economia Anual Gerada</p>
                      <p className="text-4xl font-extrabold text-center text-emerald-400">R$ 18.144,00</p>
                      <p className="text-center text-xs text-emerald-400/70 mt-2">Dinheiro limpo no seu caixa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* --- VENDA DO CÓDIGO FONTE --- */}
      <section id="codigo" className="py-20 bg-gradient-to-r from-slate-900 to-indigo-950 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Oportunidade para Desenvolvedores</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Tenha sua própria Tech House</h2>
          <p className="text-slate-300 text-lg mb-10">
            Adquira o <strong>código-fonte completo (Full Stack MERN)</strong> do LCS Hub. Inclui Front-end, Back-end, Banco de Dados e documentação. Ideal para criar seu próprio SaaS e revender este mesmo serviço.
          </p>
          
          <div className="inline-block p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition">
            <div className="text-5xl font-bold text-white mb-2">R$ 16.800<span className="text-2xl text-slate-400">,00</span></div>
            <p className="text-slate-400 mb-6">Pagamento único. Propriedade intelectual transferida.</p>
            <a 
              href={linkCodigo} 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all"
            >
              Negociar Código Fonte
            </a>
          </div>
        </div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="py-12 text-center border-t border-white/5 text-slate-600 text-sm bg-slate-950">
        <p className="mb-2">&copy; {new Date().getFullYear()} LCS Gestão e Tecnologia.</p>
        <p>Transformando dados em lucro real.</p>
      </footer>
    </div>
  );
}
