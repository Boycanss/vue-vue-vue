<template>
  <div>
    <div v-if="employee.name.first">
      <b-row
        cols="1"
        cols-sm="1"
        cols-md="1"
        cols-lg="2"
        class="elseContainer"
        :style="'margin:0'"
      >
        <b-col
          ><BigImageContainer
            :src="employee.picture.large"
            :name="employee.name.first + ` ` + employee.name.last"
            :email="employee.email"
            :nat="employee.nat"
            :role="employee.role.role"
          />
        </b-col>
        <b-col>
          <EmployeeInfo :employee="employee" />
        </b-col>
      </b-row>
      <div>
        <RoleRelatedContainer :role="employee.role" />
      </div>
    </div>
  </div>
</template>

<script>
// import BigSpinner from "../spinners/BigSpinner";
import BigImageContainer from "../containers/BigImageContainer";
import EmployeeInfo from "./EmployeeInfo";
import RoleRelatedContainer from "../containers/RoleRelatedContainer.vue";

export default {
  components: { EmployeeInfo, BigImageContainer, RoleRelatedContainer },
  props: ["employee"],
};
</script>

<style>

.elseContainer {
  padding-top: 35px;
}
.flexCol {
  display: flex;
  flex-direction: column;
}
.infoemployee {
  display: flex;
  flex-direction: row;
}
</style>
