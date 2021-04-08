<template>
  <router-link
    class="detailLink"
    :to="`/employee/details/${user.login.username}`"
  >
    <div class="cardContainer">
      <b-spinner
        v-if="!user.picture.large"
        style="width: 2rem; height: 2rem"
        variant="primary"
        type="grow"
      ></b-spinner>
      <div class="flexCol infoContainer" v-else>
        <div
          class="headerCard"
          :style="`background-color:${color[user.role.id - 1]}`"
        />
        <img :src="user.picture.large" class="profilePicture-l" />

        <div class="flexCol infoinfo">
          <b class="userName">{{ user.name.first }} {{ user.name.last }}</b>

          <span class="userEmail">{{ user.email }}</span>
          <Natflag :nat="user.nat" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import Natflag from "../icons/natFlags";

export default {
  components: { Natflag },
  props: ["user"],
  data() {
    return {
      color: ["green", "yellow", "midnightblue", "brown"],
    };
  },
  methods: {},
};
</script>

<style>
a.detailLink,
a.detailLink:hover {
  color: inherit;
  text-decoration: none;
}
.cardContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 290px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0px 4px 20px -3px #00000082;
  transition: ease-in 0.2s;
  margin-bottom: 15px;
}
.cardContainer:hover {
  box-shadow: 0px 4px 25px 0px #000000bd;
}

.infoinfo:hover {
  color: inherit;
  text-decoration: none;
}

.headerCard {
  position: relative;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: 30%;
}

.profilePicture-l {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  z-index: 1;
  top: -45px;
  position: relative;
}
.flexCol {
  display: flex;
  flex-direction: column;
}
.infoContainer {
  width: 100%;
  align-items: center;
}
.infoinfo {
  text-align: center;
  position: relative;
  bottom: 30px;
}

.userEmail {
  font-size: 12.5px;
}
.userName {
  font-size: 1.2rem;
}

@media screen and (max-width: 700px) {
  .userName {
    font-size: 0.85rem;
  }
  .userEmail {
    display: none;
  }
  .cardContainer {
    height: 235px;
  }
}
</style>
