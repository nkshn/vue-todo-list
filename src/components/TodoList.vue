<template>
  <div class="container todo-list">
    <template v-if="todos.length > 0">
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        :key="todo.id"
        v-on:remove-todo="removeTodo"
      />
    </template>
    <template v-else>
      <h3>Unfortunately, you don't have tasks! Add new one!</h3>
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
  methods: {
    removeTodo: function (todoId) {
      this.$emit("remove-todo", todoId);
    }
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