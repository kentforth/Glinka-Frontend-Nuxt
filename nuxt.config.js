export default {
  server: {
    port: 6050,
    host: '0.0.0.0',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'glinka-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Anastasiya Glinka',
        name: 'Anastasiya Glinka',
        content:
          'Personal Page of Anastasiya Glinka who is a calligraffity painter',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/css/main.css', '~assets/css/fonts.css', 'aos/dist/aos.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/burger-button.js', ssr: false },
    { src: '~/plugins/aos', ssr: false, mode: 'client' },
  ],
  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'zoom-in',
    ],
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimization: {
      minimize: true,
    },
  },
}
