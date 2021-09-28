<template>
  <div class="container todo-list">
    <div class="toggle-div" v-on:click="isShowList = !isShowList">
      <h3>List of tasks ({{ todos.length }})</h3>
      <div
        class="toggle"
        v-bind:class="{ 'toggle-active': isShowList }"
      >
      </div>
    </div>
    <div v-if="isShowList" class="todo-list">
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
  data: function () {
    return {
      isShowList: true,
    };
  },
  methods: {
    removeTodo: function (todoId) {
      this.$emit("remove-todo", todoId);
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
.toggle-div {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.toggle {
  width: 12px;
  height: 12px;
  border-bottom: 3px solid #7ba7fc;
  border-right: 3px solid #7ba7fc;
  transform: rotate(45deg);
  transition: .1s all;
  cursor: pointer;
}
.toggle-active {
  transform: rotate(225deg);
}
</style>