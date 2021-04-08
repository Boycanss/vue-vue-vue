<template>
  <Div>
    <b-icon-list id="sideButton" v-on:click="toggleShow" />

    <Div
      class="sideNav"
      :style="show == true ? { bottom: '59px' } : { bottom: '-30vh' }"
    >
      <div class="mobileSideMenu">
        <div v-if="loggedInUser" class="flexCol">
          <router-link to="/about" class="mn"><span>About</span></router-link>
          <router-link to="/collaborators" class="mn about"
            ><span>Collaborators</span></router-link
          >
          <router-link class="mn about" to="/myprofile"
            >View Profile</router-link
          >
        </div>

        <div class="mobileThemeButton">
          <ThemeButton />
        </div>
        <span v-if="loggedInUser" class="mn logoutButton" v-on:click="logout"
          >Logout</span
        >
      </div>
    </Div>
  </Div>
</template>

<script>
import Div from "../ThemedDiv";
import ThemeButton from "../buttons/themeButton";
// import { Auth } from "../../store/index";

export default {
  components: { Div, ThemeButton },
  data() {
    return { show: false, loggedInUser: false };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    logout() {
      const currentPath = this.$route.path;
      localStorage.removeItem("loggedInUser");
      if (currentPath === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
        window.location.reload();
      }
    },
  },
  mounted() {
    if (localStorage.getItem("loggedInUser") !== null) {
      this.loggedInUser = true;
    } else {
      this.loggedInUser = false;
    }
  },
};
</script>

<style>
div.mobileSideMenu {
  display: flex;
  flex-direction: column;
}
div.mobileThemeButton {
  align-self: center;
  margin-left: -30px;
}
.flexCol {
  display: flex;
  flex-direction: column;
}
div.sideNav {
  width: 100%;
  position: fixed;
  z-index: -1;
  left: 0;
  bottom: 59px;
  height: 30vh;
  transition: ease-out 0.2s;
  padding: 15px 5px;
  text-align: center;
  /* border-top: 1px solid darkslategrey; */
}
.b-icon.bi {
  font-size: 1.5rem;
  cursor: pointer;
}

.xButton {
  position: absolute;
  bottom: 20px;
  right: 50px;
  cursor: pointer;
}
</style>
