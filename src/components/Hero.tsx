import React from 'react';

export const Hero: React.FC = () => {
    const baseUrl = import.meta.env.BASE_URL || '/';

    return (
        <section className="relative w-full overflow-hidden bg-[#0b111e]">
            <div className="block md:hidden w-full">
                <div
                    className="w-full h-[65vh] min-h-95 max-h-130 bg-no-repeat bg-cover bg-top"
                    style={{ backgroundImage: `url(${baseUrl}herobgsm.png)` }}
                />
                <div className="px-6 py-8 text-left bg-[#0b111e]">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-sky-400 bg-sky-950/50 border border-sky-800/40 rounded-full">
                        Desenvolvedor Full Stack & .NET
                    </span>
                    <h1 className="text-3xl font-bold tracking-tight text-white font-[Plus_Jakarta_Sans]">
                        Thiago de Souza
                    </h1>
                    <p className="mt-4 text-base font-light leading-relaxed text-gray-300">
                        Especializado em construir aplicações robustas e escaláveis com .NET (C#), PostgreSQL e interfaces modernas em React com TypeScript.
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                        >
                            Ver Projetos
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-300 bg-gray-800/80 border border-gray-700/60 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Entrar em Contato
                        </a>
                    </div>
                </div>
            </div>

            <div className="hidden md:block relative w-full min-h-[calc(100vh-72px)] bg-[#0b111e] overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${baseUrl}hero-bg.jpg)`,
                        backgroundPosition: 'right 0% top 0%',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0b111e] via-[#0b111e]/85 to-transparent w-full md:w-2/3 lg:w-3/5 pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-8 py-20 min-h-[calc(100vh-72px)] flex items-center">
                    <div className="max-w-xl text-left z-10">
                        <span className="inline-block px-3.5 py-1 mb-4 text-xs font-medium text-sky-400 bg-sky-950/50 border border-sky-800/40 rounded-full">
                            Desenvolvedor Full Stack & .NET
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-[Plus_Jakarta_Sans]">
                            Thiago de Souza
                        </h1>
                        <p className="mt-6 text-lg font-light leading-relaxed text-gray-300">
                            Especializado em construir aplicações robustas e escaláveis com .NET (C#), PostgreSQL e interfaces modernas em React com TypeScript.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                Ver Projetos
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-300 bg-gray-800/80 border border-gray-700/60 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Entrar em Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
