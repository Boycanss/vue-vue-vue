<template>
  <Div>
    <div class="section">
      <h1><b>Employees</b></h1>
      <br />
      <div v-if="users.length === 0">
        <BigSpinner />
      </div>

      <b-row
        v-else
        cols="2"
        cols-sm="2"
        cols-md="2"
        cols-lg="3"
        cols-xl="4"
        :style="'margin:0'"
      >
        <b-col v-for="user in users" :key="user.login.uuid">
          <EmployeeCard :user="user" />
        </b-col>
      </b-row>
    </div>
  </Div>
</template>

<script>
import Div from "../components/ThemedDivSecondary";
import EmployeeCard from "../components/cards/EmployeeCard-S";
import BigSpinner from "../components/spinners/BigSpinner";
import { Collab } from "../store/index";

export default {
  components: { Div, EmployeeCard, BigSpinner },
  data() {
    return {
      users: Collab.state.collaborators,
    };
  },
  mounted() {
    document.title = "Employee Page";
    Collab.watch(
      (state) => state.collaborators,
      () => {
        this.users = Collab.state.collaborators;
      }
    );
  },
};
</script>

<style>
.section {
  position: relative;
  width: 90%;
  margin: auto;
  padding-top: 20px;
  min-height: 92.5vh;
}
</style>
