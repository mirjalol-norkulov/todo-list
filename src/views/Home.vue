<template>
  <div class="home">
    <div class="w-11/12 md:9/12 lg:w-1/2 max-w-xl">
      <h1 class="text-8xl lowercase py-2 text-center text-primary-light">
        todos
      </h1>
      <todo-app />

      <div class="text-2xs text-center text-gray-medium mt-12 font-light">
        <p class="my-1">Double-click to edit a todo</p>
        <p>Written by Mirjalol Norkulov</p>
      </div>
    </div>
  </div>
</template>

<script>
import TodoApp from "@/components/TodoApp";

export default {
  name: "Home",
  components: { TodoApp },
};
</script>

<style lang="scss">
.home {
  background: #f5f5f5;
  @apply w-screen h-screen flex items-start justify-center py-8;
}
</style>
