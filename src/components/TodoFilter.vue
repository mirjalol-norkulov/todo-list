<template>
  <div class="todo-filter">
    <div class="todo-filter__btn">
      <input
        type="radio"
        name="filter"
        id="all"
        :value="$constants.FILTERS.ALL"
        v-model="filter"
      />
      <label for="all">All</label>
    </div>
    <div class="todo-filter__btn">
      <input
        type="radio"
        name="filter"
        id="active"
        :value="$constants.FILTERS.ACTIVE"
        v-model="filter"
      />
      <label for="active">Active</label>
    </div>
    <div class="todo-filter__btn">
      <input
        type="radio"
        name="filter"
        id="completed"
        :value="$constants.FILTERS.COMPLETED"
        v-model="filter"
      />
      <label for="completed">Completed</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("SET_FILTER", value);
      },
    },
  },
};
</script>

<style lang="scss">
.todo-filter {
  @apply flex;

  &__btn {
    input {
      @apply hidden;
    }

    label {
      @apply inline-block px-2 py-1 rounded mx-1 border border-transparent
      transition-all duration-300 cursor-pointer;
    }

    input:checked + label,
    label:hover {
      @apply border-gray;
    }
  }
}
</style>
