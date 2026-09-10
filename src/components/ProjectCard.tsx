import React from 'react';
import { type Project } from '../types/project';

export const ProjectCard: React.FC<Project> = ({
    title,
    tag,
    description,
    technologies,
    featured,
    demoUrl,
    githubUrl,
}) => {
    return (
        <div className={`flex flex-col justify-between bg-white rounded-xl border ${featured ? 'border-blue-600 ring-2 ring-blue-600/10 shadow-md' : 'border-slate-200 shadow-sm'} p-6 hover:shadow-lg transition-all`}>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        {tag}
                    </span>
                    {featured && (
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Destaque
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-[#0b192c] mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
            </div>

            <div>
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200"
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
                            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            <span>Acessar Projeto</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    ) : (
                        <span className="text-slate-400 text-xs italic">Demo em breve</span>
                    )}

                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};