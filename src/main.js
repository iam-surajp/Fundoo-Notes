import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

// Components
const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)

app.use(router)

app.mount('#app')
