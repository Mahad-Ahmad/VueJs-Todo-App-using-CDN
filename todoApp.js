// todoApp.js
export default {
  template: `
    <div>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add task..." />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="removeTask(index)">❌</button>
        </li>
      </ul>
    </div>
  `,
  setup() {
    const { ref } = Vue;

    const newTask = ref("");
    const tasks = ref([]);

    return { newTask, tasks };
  },
};
