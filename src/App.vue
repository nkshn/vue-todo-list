<template>
  <div id="app">
    <Title name="ToDo List" />
    <AddTodo />
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
    <Bottom />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import Title from "./components/Title.vue";
import TodoList from "./components/TodoList.vue";
import Bottom from "./components/Bottom.vue";

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
  watch: {
    todos: {
      handler: function (newValue, oldValue) {
        console.log("Watching todos ", " newVal: ", newValue, " oldoldVal: ", oldValue);
        /*this.todos = this.todos.sort(function(x, y) {
          // true values first
          // return (x === y)? 0 : x? -1 : 1;
          // false values first
          return (x === y)? 0 : x? 1 : -1;
        });*/
      },
      deep: true,
    }
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
