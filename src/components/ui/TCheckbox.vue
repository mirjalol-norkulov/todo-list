<template>
  <div class="t-checkbox">
    <label>
      <input
        type="checkbox"
        :checked="value"
        class="hidden"
        @change="handleChange"
      />
      <check-icon class="hidden text-green-300 w-6 h-6 transform -rotate-12" />
    </label>
  </div>
</template>

<script>
import CheckIcon from "@/assets/icons/svg/check.svg";

export default {
  name: "TCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  components: { CheckIcon },
  methods: {
    handleChange() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.t-checkbox {
  label {
    @apply border border-gray bg-white inline-block rounded-full w-8 h-8
    flex items-center justify-center cursor-pointer;
  }

  input:checked + svg {
    @apply inline;
  }
}
</style>
