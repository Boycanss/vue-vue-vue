<template>
  <Div>
    <BigImageContainer
      :src="loggedInUser.picture.large"
      :name="loggedInUser.name.first + ' ' + loggedInUser.name.last"
      :nat="loggedInUser.nat"
      :email="loggedInUser.email"
      :role="loggedInUser.role.role"
      :editMode="editing"
      :editValue="editValue"
      :select="select"
    />
    <div :style="'margin-bottom:30px'">
      <EmployeeInfo :employee="loggedInUser" :centerTitle="true" />
    </div>
    <div class="editButtonContainer">
      <b-button
        :variant="editing ? 'primary' : 'secondary'"
        class="editButton"
        v-on:click="editorsave"
      >
        <b-icon-pencilFill v-if="!editing" />
        <b-icon-check2 v-else />
      </b-button>
    </div>
  </Div>
</template>

<script>
import Div from "../components/ThemedDivSecondary";
import EmployeeInfo from "../components/cards/EmployeeInfo";
import BigImageContainer from "../components/containers/BigImageContainer";

export default {
  components: { Div, BigImageContainer, EmployeeInfo },
  data() {
    return {
      loggedInUser: {},
      editing: false,
      editValue: {
        name: { first: "", last: "" },
        role: {},
        email: "",
        selectRole: [
          { id: 1, role: "Android Developer" },
          { id: 2, role: "Backend Developer" },
          { id: 3, role: "Frontend Developer" },
          { id: 4, role: "Data Scientist" },
        ],
      },
    };
  },
  mounted() {
    const currentuser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.editValue.name.first = currentuser.name.first;
    this.editValue.name.last = currentuser.name.last;
    this.editValue.role = currentuser.role;
    this.editValue.email = currentuser.email;

    this.loggedInUser = currentuser;
  },
  methods: {
    editorsave() {
      this.editing = !this.editing;
      if (!this.editing) {
        const { name, role, email } = this.editValue;
        const currentuser = JSON.parse(localStorage.getItem("loggedInUser"));
        currentuser.name = name;
        currentuser.role = role;
        currentuser.email = email;
        localStorage.setItem("loggedInUser", JSON.stringify(currentuser));
        window.location.reload();
      } else {
        console.log("start editing");
      }
    },
    select(indexRole) {
      this.editValue.role = this.editValue.selectRole[indexRole];
    },
  },
};
</script>

<style>
.editButtonContainer {
  margin: auto;
  height: 100px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button.editButton {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}
</style>
