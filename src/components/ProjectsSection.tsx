import React from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projetos" className="py-20 bg-slate-100/70 border-t border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Portfólio</span>
                    <h2 className="text-3xl font-extrabold text-navy-900 mt-1">Projetos em Destaque</h2>
                    <p className="text-slate-600 mt-2 text-sm md:text-base">
                        Aplicações desenvolvidas com foco em código limpo, APIs RESTful e interfaces ágeis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};