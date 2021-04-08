<template>
  <Div>
    <EmployeeDetail :employee="employee" />
  </Div>
</template>

<script>
import Div from "../components/ThemedDivSecondary";
import EmployeeDetail from "../components/cards/EmployeeDetail";
import { Collab } from "../store/index";

export default {
  components: { Div, EmployeeDetail },
  data() {
    return {
      employee: [],
    };
  },
  mounted() {
    document.title = `Details @${this.$route.params.username}`;

    const result = Collab.state.collaborators.filter((coll) => {
      return coll.login.username === this.$route.params.username;
    });
    this.employee = result[0];
  },
};
</script>

<style></style>
