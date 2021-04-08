<template>
  <Div>
    <div class="subContentContainer">
      <b class="subtitleRelated">Related employee in {{ role.role }}</b>
      <br /><br />
      <div v-if="related.length === 0">
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
        <b-col v-for="rel in related" :key="rel.login.uuid">
          <EmployeeCard :user="rel" />
        </b-col>
      </b-row>
    </div>
  </Div>
</template>

<script>
import Div from "../ThemedDivSecondary";
import BigSpinner from "../spinners/BigSpinner";
import EmployeeCard from "../cards/EmployeeCard-S";
import { Collab } from "../../store/index";

export default {
  components: { Div, BigSpinner, EmployeeCard },
  props: ["role"],
  data() {
    return {
      related: [],
    };
  },
  mounted() {
    const result = Collab.state.collaborators.filter((coll) => {
      return coll.role.id === this.$props.role.id;
    });
    this.related = result;
  },
};
</script>

<style>
b.subtitleRelated {
  margin-left: 30px;
  font-size: 1.3rem;
}
.subContentContainer {
  margin-top: 50px;
}
@media screen and (max-width: 700px) {
  b.subtitleRelated{
    font-size: 1rem;
  }
}
</style>
