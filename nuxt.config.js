import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: "AIzaSyCV24nB2g3dfjCec3MsiqoSxne_uyRMqmw",
            authDomain: "pos-system-b026b.firebaseapp.com",
            databaseURL: "https://pos-system-b026b.firebaseio.com",
            projectId: "pos-system-b026b",
            storageBucket: "pos-system-b026b.appspot.com",
            messagingSenderId: "742181668926",
            appId: "1:742181668926:web:cdc027ffbe0572469d296f",
            measurementId: "G-R54P1TH9TJ"

          },
          services: {
            firestore: true
          },
          production: {
            apiKey: "AIzaSyCV24nB2g3dfjCec3MsiqoSxne_uyRMqmw",
            authDomain: "pos-system-b026b.firebaseapp.com",
            databaseURL: "https://pos-system-b026b.firebaseio.com",
            projectId: "pos-system-b026b",
            storageBucket: "pos-system-b026b.appspot.com",
            messagingSenderId: "742181668926",
            appId: "1:742181668926:web:cdc027ffbe0572469d296f",
            measurementId: "G-R54P1TH9TJ"
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'firestore', 'functions', 'storage', 'realtimeDb', 'messaging', 'performance', 'analytics', 'remoteConfig'],
        customEnv: false,
        functionsLocation: 'us-central1',
        remoteConfig: {
          settings: {
            fetchTimeoutMillis: 60000,
            minimumFetchIntervalMillis: 43200000,
          },

        }
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,  //you don't actually need this line as it's for default
      themes: {
        light: {
          primary: '#f2f3f5',
          secondary: '#1b50aa',
          white: '#ffffff'



        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
