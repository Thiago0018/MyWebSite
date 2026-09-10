export interface Project {
    id: number;
    title: string;
    tag: string;
    description: string;
    technologies: string[];
    featured?: boolean;
    demoUrl?: string;
    githubUrl: string;
}