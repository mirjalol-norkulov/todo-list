<template>
  <div class="shadow-xl">
    <todo-create />
    <todo-list />
    <todo-footer v-if="hasTodos" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoCreate from "@/components/TodoCreate";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: "TodoApp",
  components: { TodoCreate, TodoList, TodoFooter },
  computed: {
    ...mapGetters(["hasTodos"]),
  },
};
</script>
