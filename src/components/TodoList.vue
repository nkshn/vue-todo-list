<template>
  <div class="container todo-list">
    <template v-if="todos.length > 0">
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        :key="todo.id"
      />
    </template>
    <template v-else>
      <h3>Unfortunately, you dont have tasks! Add new one!</h3>
    </template>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>