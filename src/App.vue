<template>
  <div id="app">
    <Title name="ToDo List" />
    <TodoList v-bind:todos="todos" />
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
        { id: 1, name: "task 1", isDone: true, },
        { id: 2, name: "task 2", isDone: false, },
        { id: 3, name: "task 3", isDone: true, },
      ],
    };
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
