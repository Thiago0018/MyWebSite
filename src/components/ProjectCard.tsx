import React, { useState } from 'react';
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
    const [isExpanded, setIsExpanded] = useState(false);

    const formattedImageUrl = imageUrl
        ? imageUrl.startsWith('http')
            ? imageUrl
            : `${import.meta.env.BASE_URL}${imageUrl.replace(/^\//, '')}`
        : null;

    const hasDemo = typeof demoUrl === 'string' && demoUrl.trim() !== '';

    return (
        <div
            className="group relative bg-[#181d26] rounded-xl border border-[#27303f] hover:border-[#374357] transition-all duration-300 overflow-hidden flex flex-col justify-between p-5"
        >
            {/* Topo do Card */}
            <div>
                <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-300 bg-[#222a38] border border-[#2e394a] px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>

                    {featured && (
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                            Destaque
                        </span>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                {/* Preview do Projeto */}
                {formattedImageUrl && (
                    hasDemo ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="block relative my-3.5 rounded-lg overflow-hidden border border-[#2b3544] bg-[#0d1117] cursor-pointer hover:border-[#3e4c60] transition-colors"
                        >
                            <div className="h-6 bg-[#121721] px-2.5 flex items-center border-b border-[#242d3c]">
                                <span className="text-[10px] font-mono text-slate-400 truncate">
                                    {title.toLowerCase().replace(/\s+/g, '-')}.app
                                </span>
                            </div>

                            <div className="relative h-32 w-full overflow-hidden bg-[#0a0d14]">
                                <img
                                    src={formattedImageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover object-top opacity-85 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300 pointer-events-none"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </a>
                    ) : (
                        <div className="relative my-3.5 rounded-lg overflow-hidden border border-[#2b3544] bg-[#0d1117]">
                            <div className="h-6 bg-[#121721] px-2.5 flex items-center border-b border-[#242d3c]">
                                <span className="text-[10px] font-mono text-slate-400 truncate">
                                    {title.toLowerCase().replace(/\s+/g, '-')}.app
                                </span>
                            </div>

                            <div className="relative h-32 w-full overflow-hidden bg-[#0a0d14]">
                                <img
                                    src={formattedImageUrl}
                                    alt={title}
                                    className="w-full h-full object-cover object-top opacity-60"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )
                )}

                {/* Descrição com Toggle */}
                <div className="mt-2 mb-4">
                    <p className={`text-slate-300 text-xs leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                        {description}
                    </p>
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-400 hover:text-blue-300 transition-colors mt-1 focus:outline-none cursor-pointer"
                    >
                        <span>{isExpanded ? 'Mostrar menos' : 'Ler descrição completa'}</span>
                        <svg
                            className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

            </div>

            {/* Rodapé do Card */}
            <div className="pt-1">
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] font-normal text-slate-300 bg-[#212936] px-2 py-0.5 rounded border border-[#2d3748]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#232b38] text-xs font-medium">
                    {demoUrl ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <span>Acessar Projeto</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        <span className="text-slate-500 text-[11px] italic">Demo em breve</span>
                    )}

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>Código</span>
                    </a>
                </div>
            </div>
        </div>
    );
};