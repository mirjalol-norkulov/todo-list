<template>
  <div>
    <todo-item
      v-for="(todo, index) in filteredTodos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: { TodoItem },
  computed: {
    ...mapGetters(["filteredTodos"]),
  },
};
</script>

<style scoped></style>
