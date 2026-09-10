import React from 'react';
import { type Project } from '../types/project';

export const ProjectCard: React.FC<Project> = ({
    title,
    tag,
    description,
    technologies,
    imageUrl,
    featured,
    demoUrl,
    githubUrl,
}) => {
    const formattedImageUrl = imageUrl
        ? imageUrl.startsWith('http')
            ? imageUrl
            : `${import.meta.env.BASE_URL}${imageUrl.replace(/^\//, '')}`
        : null;

    const hasDemo = typeof demoUrl === 'string' && demoUrl.trim() !== '';

    return (
        <div
            className={`group relative bg-white rounded-2xl border ${featured
                ? 'border-blue-500/80 ring-1 ring-blue-500/20 shadow-md'
                : 'border-slate-200/80 shadow-sm'
                } hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-6`}
        >
            {/* Topo do Card: Badge + Ícone de Janela */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full">
                        {tag}
                    </span>

                    {featured && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                            Destaque
                        </span>
                    )}
                </div>

                {/* Título & Descrição */}
                <h3 className="text-xl font-bold text-[#0b192c] group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                {/* Preview do Projeto*/}
                {formattedImageUrl && (
                    hasDemo ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="block relative my-4 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-inner group/img cursor-pointer hover:border-slate-300 transition-colors"
                        >
                            {/* Barra superior de janela de código / browser */}
                            <div className="h-7 bg-slate-900/90 px-3 flex items-center gap-1.5 border-b border-slate-800">
                                <span className="ml-2 text-[10px] font-mono text-slate-500 truncate">
                                    {title.toLowerCase().replace(/\s+/g, '-')}.app
                                </span>
                            </div>

                            {/* Imagem do Projeto com Zoom Suave */}
                            <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                                <img
                                    src={formattedImageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300 pointer-events-none"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </a>
                    ) : (
                        <div className="relative my-4 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-inner">
                            {/* Barra superior de janela de código / browser */}
                            <div className="h-7 bg-slate-900/90 px-3 flex items-center gap-1.5 border-b border-slate-800">
                                <span className="ml-2 text-[10px] font-mono text-slate-500 truncate">
                                    {title.toLowerCase().replace(/\s+/g, '-')}.app
                                </span>
                            </div>

                            {/* Imagem fixa sem efeitos de hover/zoom */}
                            <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                                <img
                                    src={formattedImageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover object-top opacity-70"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )
                )}
                <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-5">
                    {description}
                </p>

            </div>

            {/* Rodapé */}
            <div className="pt-2">
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-semibold">
                    {demoUrl ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <span>Acessar Projeto</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        <span className="text-slate-400 text-xs font-normal italic">Demo em breve</span>
                    )}

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Código</span>
                    </a>
                </div>
            </div>
        </div >
    );
};