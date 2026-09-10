import { type Project } from '../types/project';

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Convertex",
        tag: ".NET / React",
        description: "Reconhecedor óptico de caracteres (OCR) integrado à API do Google Vision via backend .NET. Frontend responsivo construído em React com TypeScript para processamento e extração de textos em tempo real.",
        technologies: ["C#", ".NET 8", "React", "TypeScript", "Google Vision API", "Tailwind CSS"],
        featured: true,
        demoUrl: "https://github.com/Thiago0018",
        githubUrl: "https://github.com/Thiago0018"
    },
    {
        id: 2,
        title: "MyStore API & Management",
        tag: "Backend .NET",
        description: "API RESTful robusta para controle de inventário, vendas e usuários. Desenvolvida com arquitetura limpa, ORM leve via Dapper e banco de dados PostgreSQL containerizado no Docker.",
        technologies: ["C#", ".NET 8", "PostgreSQL", "Dapper", "Docker", "xUnit"],
        featured: false,
        githubUrl: "https://github.com/Thiago0018"
    },
    {
        id: 3,
        title: "Finance Tracker",
        tag: "Full Stack",
        description: "Aplicação web para gestão de finanças pessoais com categorização automática, criação de relatórios de fluxo de caixa e visualizações gráficas interativas.",
        technologies: ["C#", ".NET 8", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
        featured: false,
        githubUrl: "https://github.com/Thiago0018"
    }
];