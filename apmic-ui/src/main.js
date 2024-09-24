import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useThemeStore } from './stores/theme'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(createPinia())

const { setLightTheme } = useThemeStore()
setLightTheme()

app.use(router)
app.mount('#app')
