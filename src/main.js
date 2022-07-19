import { createApp } from 'vue'
import App from './App.vue'
import App2 from './components/ContentHome.vue'

import './assets/main.css'

createApp(App).mount('#app')
App.components('ContentHome', App2)