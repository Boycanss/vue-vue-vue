<template>
  <div class="wrapperSecondary" v-bind:class="light ? 'light' : 'dark'">
    <slot> </slot>
  </div>
</template>

<script>
import { Theme } from "../store/index";

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
.wrapperSecondary {
  transition: ease-out 0.3s;
}

.wrapperSecondary.light {
  color: #2c3e50;
  background-color: #eae4ff;
}

.wrapperSecondary.dark {
  color: #f8f9fa;
  background-color: #212f3d;
}

@media screen and (max-width: 700px) {
  .wrapperSecondary{
    margin-bottom: 60px;
  }
}
</style>
