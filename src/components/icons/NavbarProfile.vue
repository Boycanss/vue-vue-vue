<template>
  <div class="containerdd" ref="toggleRef">
    <img
      :src="img"
      alt="profile tiny"
      class="imgProfileTiny"
      v-on:click="dropdownActive = !dropdownActive"
    />

    <div v-if="dropdownActive" class="dropdownContainer">
      <router-link class="mn2 profile" to="/myprofile"
        >View Profile</router-link
      >
      <span class="mn logoutButton" v-on:click="logout">Logout</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "",
      dropdownActive: false,
    };
  },
  watch: {
    dropdownActive: function (newState) {
      if (newState === true) {
        window.addEventListener("click", (e) => {
          if (!this.$el.contains(e.target)) {
            this.dropdownActive = false;
          }
        });
      } else {
        window.removeEventListener("click", (e) => {
          if (!this.$el.contains(e.target)) {
            this.dropdownActive = false;
          }
        });
      }
    },
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem("loggedInUser"));
    this.img = data.picture.thumbnail;
  },
  methods: {
    logout() {
      const currentPath = this.$route.path;
      localStorage.removeItem("loggedInUser");
      if (currentPath === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
        window.location.reload();
      }

      // this.$router.push({ name: "Home" });
      // this.$forceUpdate();
    },
  },
};
</script>

<style>
.containerdd {
  display: flex;
  justify-content: center;
}
.dropdownContainer {
  text-align: center;
  position: absolute;
  height: 75px;
  width: 150px;
  background-color: #8e8e8ee0;
  top: 50px;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  border-radius: 10px;
}
.imgProfileTiny {
  border-radius: 50%;
  width: 30px;
  box-shadow: 0px 0px 5px 0px grey;
  cursor: pointer;
}
.logoutButton,
.mn2 {
  padding-top: 5px;
  cursor: pointer;
  color: inherit;
}
.logoutButton:hover,
.profile:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.555);
}
</style>
