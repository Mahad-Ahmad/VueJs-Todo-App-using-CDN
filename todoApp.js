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
  // Option API

  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask.trim());
        this.newTask = "";
      }
    },
    removeTask() {
      this.tasks.splice(index, 1);
    },
  },
};
