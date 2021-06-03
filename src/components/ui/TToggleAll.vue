<template>
  <div class="t-toggle-all">
    <input
      :checked="value"
      :value="value"
      type="checkbox"
      id="toggle-all"
      class="hidden"
      @change="$emit('input', !value)"
    />
    <label for="toggle-all"></label>
  </div>
</template>

<script>
export default {
  name: "TToggleAll",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  // data() {
  //   return {
  //     innerValue: false,
  //   };
  // },
  // watch: {
  //   value: {
  //     immediate: true,
  //     handler(value) {
  //       this.innerValue = value;
  //     },
  //   },
  //   innerValue: {
  //     immediate: true,
  //     handler(value) {
  //       this.$emit("input", value);
  //     },
  //   },
  // },
};
</script>

<style lang="scss">
.t-toggle-all {
  @apply text-2xl flex justify-center px-4;

  label {
    @apply block transform rotate-90 cursor-pointer;
    &::before {
      content: "❯";
      color: #e6e6e6;
    }
  }

  input:checked + label::before {
    color: #737373;
  }
}
</style>
