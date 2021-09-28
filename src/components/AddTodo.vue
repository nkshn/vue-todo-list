<template>
  <div class="container header">
    <h3>Create a new task</h3>
    <form class="header-form" v-on:submit.prevent="onFormSubmit">
      <input
        type="text"
        maxlength="60"
        v-model="taskName"
        placeholder="Enter a task name..."
      />
      <button
        type="submit"
        v-bind:class="{ 'btn-disabled': !taskName }"
        :disabled="!taskName"
      >
        add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  methods: {
    onFormSubmit: function () {
      console.log("onFormSubmit called", this.taskName);
      if (this.taskName.trim().length > 0) {
        const newTodo = {
          id: Math.random().toString(16).slice(2),
          name: this.taskName,
          isDone: false,
        };

        this.$emit("add-todo", newTodo);

        this.taskName = "";
      }
    },
  },
  data: function () {
    return {
      taskName: "",
    };
  },
};
</script>

<style scoped>
div.header {
  margin-bottom: 30px;
  text-align: left;
}
.header-form {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
input {
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 7px;
  padding-left: 7px;
  min-width: 500px;
  position: relative;
  width: 75%;
}
button {
  font-size: 20px;
  padding-right: 7px;
  padding-left: 7px;
  min-width: 100px;
  background: #7ba7fc;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 5px;
}
.btn-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>