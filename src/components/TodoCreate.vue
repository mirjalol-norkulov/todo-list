<template>
  <t-input
    placeholder="What needs to be done?"
    full-width
    autofocus
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
</template>

<script>
function createIdGenerator(initial = 1) {
  let id = initial;
  return function () {
    return id++;
  };
}

import TInput from "@/components/ui/TInput";
import TToggleAll from "@/components/ui/TToggleAll";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "TodoCreate",
  components: { TInput, TToggleAll },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["hasTodos"]),
    isAllCompleted: {
      get() {
        return this.$store.getters.isAllCompleted;
      },
      set(value) {
        this.toggleAllCompleted(value);
      },
    },
  },
  created() {
    this.generateId = createIdGenerator(this.todos.length + 1);
  },
  methods: {
    ...mapMutations({
      addTodo: "ADD_TODO",
      toggleAllCompleted: "SET_ALL_TODOS_IS_COMPLETE",
    }),
    handleAddTodo() {
      if (!this.inputValue) {
        return;
      }
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

<style scoped></style>
