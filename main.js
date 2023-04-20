const { createApp } = Vue

createApp({
  data() {
    return {
      
      todos: [
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Fare la spesa',
            done: true
        },
        {
            text: 'Fare il bucato',
            done: false
        },
    ],
    newTodoText: '',
    }
  },
   methods:{
    toggleTodoDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    addNewTodo() {
      if (this.newTodoText.trim() !== '') {
        this.todos.push({
          text: this.newTodoText,
          done: false
        });
        this.newTodoText = '';
      }
    }
  }
}).mount('#app')