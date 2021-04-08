<template>
  <Div>
    <div
      class="containerOfContainer"
      :style="user ? 'position: relative' : 'position:absolute'"
    >
      <div v-if="!user">
        <LandingPage />
      </div>
      <div v-else>
        <Employee />
      </div>
    </div>
  </Div>
</template>

<script>
import Div from "../components/ThemedDivSecondary";
import LandingPage from "./LandingPage";
// import { Auth } from "../store/index";
import Employee from "./Employee.vue";

export default {
  components: { Div, LandingPage, Employee },
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    const userdata = localStorage.getItem("loggedInUser");
    this.user = userdata;
    document.title = "Home";
  },
};
</script>

<style>
.containerOfContainer {
  top: 0;
  width: 100%;
}
</style>
