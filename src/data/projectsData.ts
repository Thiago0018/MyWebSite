import { type Project } from '../types/project';

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Convertex",
        tag: "Full Stack",
        description: "Reconhecedor óptico de caracteres (OCR) integrado à API do Google Vision via backend .NET. Frontend responsivo construído em React com TypeScript para processamento e extração de textos em tempo real.",
        technologies: [".NET 10", "c#", "React", "TypeScript", "Google Vision API", "Tailwind CSS"],
        imageUrl: "projects/convertex.png",
        featured: true,
        demoUrl: "https://convertex-api-one.vercel.app/",
        githubUrl: "https://github.com/Thiago0018/Convertex-API/tree/main/Convertex-Front-End"
    },
    {
        id: 2,
        title: "Mercadinho do bairro",
        tag: "Full Stack",
        description: "Plataforma de e-commerce voltada ao comércio local em cidades pequenas, promovendo a compra e troca de alimentos caseiros. Backend em .NET (API RESTful) com Entity Framework e PostgreSQL para gestão de usuários, produtos e pedidos.",
        technologies: ["React", ".NET 10", "PostgreSQL", "Entity Framework", "Docker", "xUnit"],
        imageUrl: "/",
        featured: false,
        githubUrl: "https://github.com/Thiago0018"
    },
    {
        id: 3,
        title: "NoStress",
        tag: "mobile",
        description: "Aplicativo mobile para controle de assinaturas recorrentes e alertas de testes gratuitos. Realiza a checagem automática de faturas, relatórios de gastos mensais e mapeamento de oportunidades em serviços online.",
        technologies: ["C#", ".NET 10", "PostgreSQL", "ReactNative", "TypeScript", "Tailwind CSS"],
        imageUrl: "/",
        featured: false,
        githubUrl: "https://github.com/Thiago0018"
    }
];