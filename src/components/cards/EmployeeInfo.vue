<template>
  <div class="flexCol tableContainer">
    <b
      class="employeeinfo"
      :style="centerTitle === true ? 'text-align:center' : 'text-align:start'"
      >Employee Info:</b
    ><br />
    <table>
      <tr>
        <th><span>Gender:</span></th>
        <td>
          <span>{{ employee.gender }}</span>
        </td>
      </tr>
      <tr>
        <th><span>Origin:</span></th>
        <td>
          <span>{{ employee.location.street.name }}</span>
        </td>
      </tr>

      <tr>
        <th><span>Date of Birth:</span></th>
        <td>
          <span>{{
            new Date(employee.dob.date.substring(0, 10)).toDateString()
          }}</span>
        </td>
      </tr>

      <tr>
        <th><span>Age:</span></th>
        <td>
          <span>{{ employee.dob.age }}</span>
        </td>
      </tr>
      <tr>
        <th><span>Phone:</span></th>
        <td>
          <span>{{ employee.phone }}</span>
        </td>
      </tr>
      <br /><br />
      <tr>
        <th><span>Employee ID:</span></th>
        <td>
          <span>{{ employee.login.uuid }}</span>
        </td>
      </tr>
      <tr>
        <th><span>Username:</span></th>
        <td>
          <span>@{{ employee.login.username }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// import Div from "../ThemedDivSecondary";
export default {
  components: {},
  props: ["employee", "centerTitle"],
};
</script>

<style>
div.flexCol.tableContainer {
  top: 0;
}

.tableContainer {
  width: 500px;
  margin: auto;
  position: relative;
}
.flexCol {
  display: flex;
  flex-direction: column;
}
.employeeinfo {
  font-size: 1.3rem;
}

@media screen and (max-width: 700px) {
  div.flexCol.tableContainer {
    width: 100%;
    top: 0px;
    align-items: center;
  }
}

@media screen and (min-width: 701px) and (max-width: 1000px) {
  .tableContainer {
    top: 0;
    width: 450px;
  }
}
</style>
