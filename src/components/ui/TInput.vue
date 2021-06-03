<template>
  <div class="t-input" :class="{ 't-input--full': fullWidth }">
    <slot name="prefix" />
    <input
      class="t-input__input"
      type="text"
      v-bind="attrs"
      v-on="listeners"
      v-model="innerValue"
    />
  </div>
</template>

<script>
export default {
  name: "TInput",
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String],
      required: false,
    },
  },
  data() {
    return {
      innerValue: undefined,
    };
  },
  computed: {
    attrs() {
      return Object.entries(this.$attrs)
        .filter(([key]) => key !== "value")
        .reduce((res, [key, value]) => ({ ...res, [key]: value }), {});
    },
    listeners() {
      return Object.entries(this.$listeners)
        .filter(([key]) => key !== "input")
        .reduce((res, [key, value]) => ({ ...res, [key]: value }), {});
    },
  },
  watch: {
    value(value) {
      this.innerValue = value;
    },
    innerValue: {
      immediate: true,
      handler(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss">
.t-input {
  @apply flex items-center shadow-lg bg-white;

  &__input {
    @apply px-4 py-4 outline-none text-2xl text-black inline-block;

    &::placeholder {
      @apply text-gray italic;
    }
  }

  &--full {
    .t-input__input {
      @apply w-full;
    }
  }
}
</style>
