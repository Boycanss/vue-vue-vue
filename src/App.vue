<template>
  <Div id="app">
    <div class="appWrapper">
      <Navbar />
    </div>

    <router-view :key="$route.fullPath" />
  </Div>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import Div from "./components/ThemedDiv";
import { Collab } from "./store/index";

export default {
  components: { Navbar, Div },
  name: "App",
  mounted() {
    Collab.commit("getCollaborators");
  },
};
</script>

<style>
div.appWrapper {
  height: 60px;
  position: relative;
  z-index: 2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 700px) {
  div.appWrapper {
    height: 0;
  }
}
</style>
