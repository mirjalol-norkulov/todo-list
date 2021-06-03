<template>
  <footer class="todo-footer">
    <span class="flex-1">{{ remainingText }}</span>
    <todo-filter class="flex-1" />
    <div class="flex-1 flex justify-end">
      <button
        v-if="completeCount > 0"
        class="todo-footer__clear-btn"
        @click="handleClearCompleted"
      >
        Clear completed
      </button>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import TodoFilter from "./TodoFilter";
export default {
  name: "TodoFooter",
  components: { TodoFilter },
  computed: {
    ...mapGetters(["incompleteCount", "completeCount"]),
    remainingText() {
      const plural = this.incompleteCount !== 1 ? "s" : "";
      return `${this.incompleteCount} item${plural} left`;
    },
  },
  methods: {
    ...mapMutations({
      clearCompleted: "CLEAR_COMPLETED_TODOS",
    }),
    handleClearCompleted() {
      this.clearCompleted();
    },
  },
};
</script>

<style lang="scss">
.todo-footer {
  @apply px-4 py-2 flex items-center justify-between bg-white relative;
  & > * {
    z-index: 1;
  }

  &__clear-btn {
    @apply outline-none;

    &:hover {
      @apply underline;
    }
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
    z-index: 0;
  }
}
</style>
