<template>
  <div class="bigImageContainer">
    <img :src="src" alt="big image" class="profileBig" />
    <br />
    <div v-if="!editMode" class="flexCol center">
      <h2>
        <b>{{ name }}</b>
      </h2>
      <i>{{ role }}</i>
      <span>{{ email }}</span>
    </div>
    <div v-else class="editContainer">
      <div :style="'display:flex; flex-direction:row'">
        <b-form-input
          v-model="editValue.name.first"
          :value="editValue.name.first"
          type="text"
        ></b-form-input>
        <b-form-input
          v-model="editValue.name.last"
          :value="editValue.name.last"
          type="text"
        ></b-form-input>
      </div>

      <br />
      <div>
        <b-dropdown :text="editValue.role.role" class="roleDd">
          <b-dropdown-item
            v-on:click="select(editValue.selectRole.indexOf(role))"
            v-for="role in editValue.selectRole"
            :key="role.id"
          >
            {{ role.role }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <br />
      <b-form-input
        v-model="editValue.email"
        :value="editValue.email"
        type="text"
      ></b-form-input>
    </div>
    <br v-if="editMode" />
    <NatFlags :nat="nat" />
  </div>
</template>

<script>
import NatFlags from "../icons/natFlags.vue";
// import Div from "../ThemedDivSecondary";

export default {
  components: { NatFlags },
  props: [
    "src",
    "name",
    "email",
    "nat",
    "role",
    "editMode",
    "editValue",
    "select",
  ],
  mounted() {
    // console.log(this.$props.editValue);
  },
};
</script>

<style>
div.dropdown.roleDd {
  width: 100%;
}
.editContainer {
  width: 300px;
}
.center {
  text-align: center;
}
.bigImageContainer {
  justify-content: center;
  display: flex;
  padding: 10px 5px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.profileBig {
  width: 300px;
  border-radius: 50%;
}

@media screen and (max-width: 700px) {
  .profileBig {
    width: 240px;
  }
}
</style>
