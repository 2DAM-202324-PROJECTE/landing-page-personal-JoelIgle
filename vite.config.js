export default {
// config options
    base: '/landing-page-personal-JoelIgle/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                company: resolve(__dirname, 'Company/company.html'),
            },
        },
    },
}