import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const vuetify = createVuetify()

createApp(App).use(vuetify).mount('#app')

const app = createApp(App)

app.use(router)

/* app.mount('#app') */
