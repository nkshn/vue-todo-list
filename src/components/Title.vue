<template>
  <h1>{{ name }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    name: {
      type: String,
      required: true,
      default: "ToDo List",
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 34px;
  color: #7ba7fc;
  font-weight: 700;
}
</style>
