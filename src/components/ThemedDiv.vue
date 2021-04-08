<template>
  <div class="wrapper" v-bind:class="light ? 'light' : 'dark'">
    <slot> </slot>
  </div>
</template>

<script>
import {Theme} from "../store/index";

export default {
  data() {
    return { light: Theme.state.light };
  },
  mounted() {
    Theme.watch(
      (state) => state.light,
      () => {
        this.light = Theme.state.light;
      }
    );
  },
};
</script>

<style>
.wrapper {
  transition: ease-out 0.2s;
}

.wrapper.light {
  color: #2c3e50;
  background-color: #d4c6ff;;
}
.wrapper.dark {
  color: #f8f9fa;
  background-color: #2c3e50;
}
</style>
