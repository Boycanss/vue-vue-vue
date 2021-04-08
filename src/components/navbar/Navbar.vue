<template>
  <b-navbar toggleable="lg">
    <Div class="menuContainer">
      <router-link to="/" class="logo"
        ><img class="logoImg" v-bind:src="logoImg"
      /></router-link>
      <div class="menu">
        <div class="pcMenu">
          <div v-if="loggedInUser" class="flexRow">
            <router-link to="/about" class="mn about"
              ><span>About</span></router-link
            >
            <router-link to="/collaborators" class="mn about"
              ><span>Collaborators</span></router-link
            >
            <div class="iconProfile">
              <NavbarProfile />
            </div>
          </div>
          <ThemeButton />
        </div>
        <div class="mobileMenu">
          <SideBar />
        </div>
      </div>
    </Div>
  </b-navbar>
</template>

<script>
import SideBar from "./SideBar";
import logo from "../../assets/logo.png";
import Div from "../ThemedDiv";
import ThemeButton from "../buttons/themeButton";
import NavbarProfile from "../icons/NavbarProfile";
// import { Auth } from "../../store/index";

export default {
  data() {
    return { logoImg: logo, loggedInUser: false };
  },
  methods: {},
  components: { SideBar, Div, ThemeButton, NavbarProfile },
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
.iconProfile {
  margin-left: 15px;
}
.menuContainer,
.menu {
  display: flex;
  flex-direction: row;
}
.menuContainer {
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10rem;
}
.menu {
  font-size: 1rem;
  justify-content: flex-end;
}
.mn {
  margin: 0px 15px;
}
.mn.about {
  margin-top: 3.5px;
}
a.mn,
a.logo {
  color: inherit;
  text-decoration: none;
}

a.mn.router-link-exact-active.router-link-active {
  color: slateblue;
  font-weight: bolder;
}

a.mn:hover,
a.router-link-active:hover {
  color: slateblue;
  text-decoration: none;
}
nav.navbar {
  width: 100%;
  position: fixed;
  height: 60px;
  /* border-bottom: 1px solid darkslategrey; */
  /* box-shadow: 0px 1px 4px 0px #a9a9a994; */
  padding: 0;
}
.logoImg {
  width: 3rem;
}

.flexRow {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 1000px) {
  .menuContainer {
    padding: 0px 5rem;
  }
}

@media screen and (max-width: 700px) {
  div.pcMenu {
    display: none;
  }
  div.mobileMenu {
    display: flex;
  }
  .menuContainer {
    padding: 0 2rem;
  }
  .logoImg {
    width: 3rem;
  }
  .mn {
    margin: 15px 15px;
  }
  nav.navbar {
    bottom: 0;
    box-shadow: 0px -1px 4px 0px #a9a9a994;
  }
}

@media screen and (min-width: 701px) {
  div.pcMenu {
    display: flex;
  }
  div.mobileMenu {
    display: none;
  }
}
</style>
