import React from 'react';

export const CTASection: React.FC = () => {
    return (
        <footer id="contato" className="bg-[#080d17] border-t border-[#1a2332] py-14">
            <div className="max-w-6xl mx-auto px-6">

                {/* Caixa de Contato Azul Marinho Escuro e Fosco */}
                <div className="bg-[#0d1b2e] border border-[#1a2b42] text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-1.5 text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-bold">Bora trabalhar juntos?</h2>
                        <p className="text-slate-300 text-xs md:text-sm font-light">
                            Novas conexões e oportunidades no desenvolvimento backend e full stack sempre são bem-vindas.
                        </p>
                    </div>

                    <a
                        href="mailto:seu-email@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs md:text-sm rounded-lg transition-all whitespace-nowrap"
                    >
                        <span>Entrar em Contato</span>
                    </a>
                </div>

                {/* Rodapé Final */}
                <div className="mt-10 pt-6 border-t border-[#161e2b] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
                    <p>© {new Date().getFullYear()} Thiago de Souza. Todos os direitos reservados.</p>
                    <div className="flex gap-5">
                        <a href="https://github.com/Thiago0018" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};