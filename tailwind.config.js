/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    800: '#102a43',
                    900: '#0b192c', // Cor de fundo principal escura/marinho profundo
                    950: '#060e1a',
                },
                brand: {
                    blue: '#2563eb',  // Azul de destaque / botões
                    hover: '#1d4ed8',
                    light: '#38bdf8'
                }
            }
        },
    },
    plugins: [],
}