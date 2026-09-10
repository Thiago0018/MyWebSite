import React from 'react';

export const Hero: React.FC = () => {
    const bgDesktopUrl = `${import.meta.env.BASE_URL}hero-bg.jpg`;
    const bgMobileUrl = `${import.meta.env.BASE_URL}herobgsm.png`;

    return (
        <section id="inicio" className="relative w-full overflow-hidden bg-[#060e1a] pb-12 md:pb-0 md:min-h-145 md:h-[80vh] md:max-h-200 flex items-center">

            {/* Background do Desktop (Médiase Grandes) - 100% encaixado na parte superior */}
            <div
                className="hidden md:block absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-bottom lg:bg-size-[105%_auto]"
                style={{
                    backgroundImage: `url('${bgDesktopUrl}')`,
                }}
            />
            {/* Overlay gradiente exclusivo do Desktop para leitura fluida à esquerda */}
            <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#060e1a] via-[#060e1a]/90 md:via-[#060e1a]/60 to-transparent" />

            {/* Container Principal */}
            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">

                {/*
          TELAS PEQUENAS (MOBILE): Div pura sem margin/bordas para a imagem vertical completa
        */}
                <div className="block md:hidden w-full h-[65vh] min-h-105 max-h-130 relative  mb-8">
                    <div
                        className="w-full h-full bg-no-repeat bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${bgMobileUrl}')`,
                        }}
                    />
                    {/* Degradê suave na base para integrar a imagem com o texto escuro abaixo */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#060e1a] to-transparent" />
                </div>

                {/* TEXTO DE APRESENTAÇÃO (Abaixo da imagem no mobile e sobreposto no desktop) */}
                <div className="max-w-xl space-y-6 text-left px-6 w-full">

                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-sky-300 text-xs font-light tracking-widest uppercase backdrop-blur-sm">
                        Desenvolvedor .NET & Full Stack
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.15]">
                        Thiago <span className="font-semibold text-sky-400">de Souza</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-extralight text-slate-200 tracking-wide">
                        Construindo soluções robustas com <span className="font-normal text-white">.NET</span> e <span className="font-normal text-white">React + TS</span>.
                    </p>

                    <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed tracking-wide max-w-md">
                        Desenvolvimento de APIs de alta performance, bancos de dados relacionais com PostgreSQL e interfaces modernas, ágeis e intuitivas.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="#projetos"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-normal text-sm rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all border border-blue-400/30 backdrop-blur-sm"
                        >
                            <span>Ver Projetos</span>
                        </a>

                        <a
                            href="#contato"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white font-light text-sm rounded-lg border border-white/20 backdrop-blur-md transition-all"
                        >
                            Contato
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex items-center gap-6 pt-4 text-slate-400">
                        <a href="https://github.com/Thiago0018" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" aria-label="GitHub">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};
