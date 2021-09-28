<template>
  <div id="app">
    <Title name="ToDo List" />
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  data: function () {
    return {
      todos: [
        { id: 1, name: "task 1", isDone: false },
        { id: 2, name: "task 2", isDone: false },
        { id: 3, name: "task 3", isDone: false },
        { id: 4, name: "task 4", isDone: false },
        { id: 5, name: "task 5", isDone: false },
      ],
    };
  },
  methods: {
    removeTodo: function (todoId) {
      console.log("Removing task " + todoId);
      this.todos = this.todos.filter(item => item.id !== todoId);
    }
  },
  components: {
    Title,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 65%;
  margin: 0 auto;
}
</style>
