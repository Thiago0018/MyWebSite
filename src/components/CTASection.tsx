import React from 'react';

export const CTASection: React.FC = () => {
    return (
        <section id="contato" className="py-16 max-w-6xl mx-auto px-6">
            <div className="bg-[#0b192c] text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">Vamos construir algo incrível juntos?</h2>
                    <p className="text-slate-300 text-sm md:text-base max-w-xl">
                        Estou aberto a novas oportunidades e conexões em desenvolvimento backend e full stack.
                    </p>
                </div>

                <a
                    href="mailto:seu-email@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all whitespace-nowrap"
                >
                    <span>Entrar em Contato</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
            </div>
        </section>
    );
};