<template>
  <div
    class="task-item"
    v-bind:class="{'task-item-done': todo.isDone}"
  >
    <div class="task-item-left">
      <input
        type="checkbox"
        v-on:change="todo.isDone = !todo.isDone"
      />
      <p>{{ todo.name }}</p>
    </div>
    <button v-on:click="$emit('remove-todo', todo.id)">delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  width: 100%;
  background: #e2e2e2;
  height: 50px;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  border-radius: 7px;
  border: 0.5px solid #b1b1b1;
  cursor: pointer;
  gap: 20px;
}
.task-item-done {
  opacity: 0.5;
}
.task-item-done p {
  text-decoration: line-through;
}
.task-item-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.task-item input {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.task-item p {
  font-size: 20px;
}
.task-item button {
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  align-self: center;
}
</style>
