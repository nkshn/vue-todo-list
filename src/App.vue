<template>
  <div id="app">
    <Title name="ToDo List" />
    <AddTodo v-on:add-todo="addTodo" />
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
      v-on:edit-todo="editTodo"
    />
    <Bottom v-bind:todos="todos" />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Title from "./components/Title.vue";
import TodoList from "./components/TodoList.vue";
import Bottom from "./components/Bottom.vue";

import {
  saveLocalStorage,
  getLocalStorage
} from "./helpers";

export default {
  name: "App",
  data: function () {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter((item) => item.id !== todoId);
    },
    editTodo(todo) {
      console.log("Edited todo: ", todo);
    }
  },
  mounted() {
    this.todos = getLocalStorage() || [];
  },
  watch: {
    todos: {
      handler(newValue) {
        saveLocalStorage(newValue);
      },
      deep: true,
    },
  },
  components: {
    AddTodo,
    Title,
    TodoList,
    Bottom,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
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
