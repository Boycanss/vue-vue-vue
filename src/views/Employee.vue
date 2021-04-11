<template>
  <Div>
    <div class="section">
      <div class="sectionHeader">
        <h1 class="sectionTitle"><b>Employees</b></h1>
        <Search />
      </div>

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
import Search from "../components/containers/Search";
import { Collab } from "../store/index";

export default {
  components: { Div, EmployeeCard, BigSpinner, Search },
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
.sectionHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
input.inputSearch {
  width: 260px;
  border-radius: 30px;
}

@media screen and (max-width: 700px) {
  h1.sectionTitle {
    font-size: 1.5rem;
    margin: 0;
  }
  input.inputSearch {
    width: 200px;
  }
}
</style>
