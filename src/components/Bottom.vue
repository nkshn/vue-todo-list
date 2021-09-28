<template>
  <div v-if="todos.length > 0" class="container bottom">
    <h3>Done Todos: {{ doneTodos }}/{{ todos.length }}</h3>
    <div class="bottom-right">
      <button
        v-on:click="removeDoneTodos"
        v-bind:class="{ 'btn-disabled': !doneTodos }"
        :disabled="!doneTodos"
      >
        remove done tasks
      </button>
      <button v-on:click="removeAllTodos">remove all tasks</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => [],
    },
    doneTodos: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    removeDoneTodos: function () {
      this.$emit("remove-done-todos");
    },
    removeAllTodos: function () {
      this.$emit("remove-all-todos");
    },
  },
};
</script>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.bottom-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
button {
  padding-top: 5px;
  font-size: 18px;
  padding-bottom: 5px;
  padding-right: 7px;
  padding-left: 7px;
}
</style>