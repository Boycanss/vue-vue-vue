<template>
  <div class="theme" v-on:click="changeTheme">
    <b-icon
      class="themeIcon"
      icon="sun"
      v-bind:style="[light == true ? 'right: -12.5px' : 'right: 16px']"
    />
    <b-icon
      class="themeIcon"
      icon="moon"
      v-bind:style="[light == true ? 'right: -18px' : 'right: 12.5px']"
    />
  </div>
</template>

<script>
import { Theme } from "../../store/index";
export default {
  data() {
    return {
      light: Theme.state.light,
    };
  },
  methods: {
    changeTheme() {
      Theme.commit("toggleTheme");
      // console.log(Store.state.light)
      this.light = Theme.state.light;
    },
  },
};
</script>

<style>
.bi-sun {
  color: #2c3e50;
}
.bi-moon {
  color: #f8f9fa;
}
.bi-moon.themeIcon.b-icon.bi,
.bi-sun.themeIcon.b-icon.bi {
  font-size: 1.3rem;
}

.themeIcon {
  align-self: center;
  position: relative;
  transition: ease-in-out 0.2s;
}
div.theme {
  margin-left: 30px;
  height: 30px;
  width: 30px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
