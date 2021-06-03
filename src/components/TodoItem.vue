<template>
  <div
    class="todo-item"
    :class="{
      'todo-item--complete': todo.isCompleted,
      'todo-item--editing': isEditing,
    }"
  >
    <t-checkbox class="mx-2" v-model="isCompleted" />
    <div
      v-if="!isEditing"
      class="todo-item__text"
      @dblclick="handleActivateEdit"
    >
      <span>
        {{ todo.text }}
      </span>
    </div>
    <input
      ref="input"
      v-else
      class="todo-item__input"
      autofocus
      v-model="inputValue"
      @keyup.enter="handleEditSave"
      @keyup.esc="handleEditCancel"
      @blur="handleEditCancel"
    />
    <button class="todo-item__delete-btn" @click="handleDelete">
      <close-icon class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import TCheckbox from "./ui/TCheckbox";
import CloseIcon from "@/assets/icons/svg/close.svg";

export default {
  name: "TodoItem",
  components: { TCheckbox, CloseIcon },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputValue: "",
      isEditing: false,
    };
  },
  computed: {
    isCompleted: {
      get() {
        return this.todo.isCompleted;
      },
      set(value) {
        this.$store.commit("SET_TODO_IS_COMPLETED", {
          id: this.todo.id,
          isCompleted: value,
        });
      },
    },
  },
  watch: {
    todo: {
      immediate: true,
      handler(value) {
        this.inputValue = value.text;
      },
    },
  },
  methods: {
    handleActivateEdit() {
      this.isEditing = true;
      setTimeout(() => {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      }, 0);
    },
    handleDelete() {
      this.$store.commit("DELETE_TODO", this.todo.id);
    },
    handleEditSave() {
      this.$store.commit("UPDATE_TODO_TEXT", {
        id: this.todo.id,
        text: this.inputValue,
      });
      this.isEditing = false;
    },
    handleEditCancel() {
      this.inputValue = this.todo.text;
      this.isEditing = false;
    },
  },
};
</script>

<style scoped lang="scss">
.todo-item {
  @apply bg-white flex items-center text-2xl
  border-t border-b select-none relative border-collapse border-gray;

  &__text {
    @apply block text-black py-4 block flex-1;

    span {
      @apply relative inline-block;
      &::after {
        content: "";
        @apply absolute top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2
        w-full h-0.5 bg-gray-darker opacity-0 pointer-events-none
        transition-all duration-300;
      }
    }
  }

  &__input {
    @apply py-4 text-black block flex-1 outline-none border;
  }

  &__delete-btn {
    @apply outline-none text-primary transition-all duration-300
    absolute right-4 top-1/2 transform -translate-y-1/2
    opacity-0 pointer-events-none;

    &:hover {
      @apply text-primary-dark;
    }
  }

  &:not(&--editing):hover {
    .todo-item__delete-btn {
      @apply opacity-100 pointer-events-auto;
    }
  }

  &--complete {
    .todo-item__text {
      @apply text-gray-darker;

      span {
        &::after {
          @apply opacity-100 pointer-events-auto;
        }
      }
    }
  }
}
</style>
