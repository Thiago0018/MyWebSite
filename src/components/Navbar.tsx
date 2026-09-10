import React from 'react';

export const Navbar: React.FC = () => {
    const logoUrl = `${import.meta.env.BASE_URL}logoheader.png`;

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo Personalizada */}
                <a href="#inicio" className="flex items-center gap-3 font-bold text-slate-900 hover:opacity-80 transition-opacity">
                    <img
                        src={logoUrl}
                        alt="Thiago de Souza Logo"
                        className="h-9 w-auto object-contain"
                    />
                    <span className="text-lg tracking-tight font-semibold">
                        Thiago <span className="text-blue-600">de Souza</span>
                    </span>
                </a>

                {/* Links de Navegação */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
                    <a href="#inicio" className="hover:text-blue-600 transition-colors">Início</a>
                    <a href="#projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
                    <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
                </nav>

                {/* Botão de Download do CV */}
                <a
                    href="/curriculo.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all border border-slate-300 shadow-sm"
                >
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download CV</span>
                </a>
            </div>
        </header>
    );
};