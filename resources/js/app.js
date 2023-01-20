// app.js

import {createApp} from 'vue'

import App from './App.vue'
import Welcome from './Welcome.vue'

createApp(Welcome).mount("#welcome")
createApp(App).mount("#app")