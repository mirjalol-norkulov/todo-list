<template>
  <div class="home">
    <div class="w-11/12 md:9/12 lg:w-1/2 max-w-xl">
      <h1 class="text-8xl lowercase py-2 text-center text-primary-light">
        todos
      </h1>
      <t-input
        placeholder="What needs to be done?"
        full-width
        v-model="inputValue"
        @keyup.native.enter="handleAddTodo"
      >
        <template slot="prefix">
          <t-toggle-all
            :class="{ 'opacity-0 pointer-events-none': !hasTodos }"
            v-model="isAllCompleted"
          />
        </template>
      </t-input>
      <todo-list />
      <todo-footer v-if="hasTodos" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TInput from "@/components/ui/TInput";
import TToggleAll from "../components/ui/TToggleAll";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";

function createIdGenerator() {
  let id = 1;
  return function () {
    return id++;
  };
}

export default {
  name: "Home",
  components: { TodoFooter, TodoList, TToggleAll, TInput },
  data() {
    return {
      inputValue: "",
      isAllCompleted: false,
    };
  },
  computed: {
    ...mapGetters(["hasTodos"]),
  },
  watch: {
    isAllCompleted(value) {
      this.toggleAllCompleted(value);
    },
  },
  methods: {
    ...mapMutations({
      addTodo: "ADD_TODO",
      toggleAllCompleted: "SET_ALL_TODOS_IS_COMPLETE",
    }),
    generateId: createIdGenerator(),
    handleAddTodo() {
      const todo = {
        id: this.generateId(),
        isCompleted: false,
        text: this.inputValue,
      };
      this.addTodo(todo);
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss">
.home {
  background: #f5f5f5;
  @apply w-screen h-screen flex items-start justify-center py-8;
}
</style>
