<template>
  <div v-if="todos.length > 0">
    dasdsadasdasdas
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
  },
};
</script>

<style scoped>
</style>