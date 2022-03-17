import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory,createRouter } from 'vue-router'
import Jam from './components/Jam.vue'
import Jam2 from './components/Jam2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        { path:'/',component:Jam },
        { path:'/jam',component:Jam2 },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
