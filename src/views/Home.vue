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
        <div class="flexRow">
          <!-- <RoleIcons /> -->
          <div :style="'width:100%'">
            <Employee />
          </div>
        </div>
      </div>
    </div>
  </Div>
</template>

<script>
import Div from "../components/ThemedDivSecondary";
import LandingPage from "./LandingPage";
// import { Auth } from "../store/index";
import Employee from "./Employee.vue";
// import RoleIcons from "../components/icons/RoleIcons";

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
