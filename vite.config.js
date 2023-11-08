
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/landing-page-personal-JoelIgle/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                company: resolve(__dirname, 'Shop/nike.html'),
                error: resolve(__dirname, 'Error/error.html'),
                features: resolve(__dirname, 'Contacto/contacto.html'),
                login: resolve(__dirname, 'Login/login.html'),
                marketplace: resolve(__dirname, 'Plan/plan.html'),
                script: resolve(__dirname,'menu.js'),
            },
        },
    },
})