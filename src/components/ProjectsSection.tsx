import React from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projetos" className="py-16 bg-[#12161f] border-t border-b border-[#1f2937]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-10">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Portfólio</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Projetos em Destaque</h2>
                    <p className="text-slate-400 mt-1.5 text-xs md:text-sm font-light">
                        Aplicações desenvolvidas com foco em código limpo, APIs RESTful e interfaces ágeis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};