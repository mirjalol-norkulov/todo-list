<template>
  <div class="todo-list">
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

<style lang="scss">
.todo-list {
  max-height: 50vh;
  @apply overflow-y-auto;

  &::-webkit-scrollbar {
    @apply w-1.5;
  }

  /* Track */

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */

  &::-webkit-scrollbar-thumb {
    @apply bg-primary rounded;
  }
}
</style>
