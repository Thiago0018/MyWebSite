import React from 'react';

export const Navbar: React.FC = () => {
    const logoUrl = `${import.meta.env.BASE_URL}logoheader.png`;

    return (
        <header className="sticky top-0 z-50 bg-[#0c1017]/95 backdrop-blur-md border-b border-[#1f2937]">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo Personalizada */}
                <a href="#inicio" className="flex items-center gap-3 font-bold text-white hover:opacity-80 transition-opacity">
                    <img
                        src={logoUrl}
                        alt="Thiago de Souza Logo"
                        className="h-8 w-auto object-contain"
                    />
                    <span className="text-base tracking-tight font-medium text-slate-200">
                        Thiago <span className="text-blue-500 font-semibold">de Souza</span>
                    </span>
                </a>

                {/* Links de Navegação */}
                <nav className="hidden md:flex items-center gap-8 font-normal text-slate-400 text-sm">
                    <a href="#inicio" className="hover:text-white transition-colors">Início</a>
                    <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
                    <a href="#contato" className="hover:text-white transition-colors">Contato</a>
                </nav>

                {/* Botão Download CV Sóbrio */}
                <a
                    href="/curriculo.pdf"
                    download
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-[#181f2a] hover:bg-[#222a38] rounded-md transition-all border border-[#2b3544]"
                >
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV</span>
                </a>
            </div>
        </header>
    );
};