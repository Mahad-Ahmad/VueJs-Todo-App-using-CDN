// main.js
import TodoApp from './todoApp.js'

const { createApp } = Vue

const app = createApp(TodoApp)
app.mount('#app2')
app.mount('#app1')

// createApp(TodoApp).mount('#app1')
// createApp(TodoApp).mount('#app2')
