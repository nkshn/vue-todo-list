<template>
  <div id="app">
    <Title name="ToDo List" />
    <AddTodo v-on:add-todo="addTodo" />
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
      v-on:edit-todo="editTodo"
    />
    <Bottom
      v-bind:todos="todos"
      v-bind:doneTodos="doneTodos"

      v-on:remove-done-todos="removeDoneTodos"
      v-on:remove-all-todos="removeAllTodos"
    />
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
      doneTodos: 0,
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
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((item) => item.isDone === false);
    },
    removeAllTodos() {
      this.todos = [];
    },
  },
  mounted() {
    this.todos = getLocalStorage() || [];
  },
  watch: {
    todos: {
      handler(newValue) {
        saveLocalStorage(newValue); // save todos to local storage

        this.doneTodos = 0; // we need to clear counter for correct counting of done todos
        
        this.todos.forEach(item => {
          if(item.isDone === true) {
            this.doneTodos++;
          }
        })
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
