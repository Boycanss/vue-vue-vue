<template>
  <Div>
    <b-row
      :style="'margin:0'"
      cols="1"
      cols-sm="2"
      cols-lg="2"
      class="landingContainer"
    >
      <b-col class="midCol">
        <h1 class="landingText">
          Enter username and password to enter the apps
        </h1>
      </b-col>
      <b-col class="midCol"><LoginCard /></b-col>
    </b-row>
  </Div>
</template>

<script>
import LoginCard from "../components/cards/LoginCard";
import Div from "../components/ThemedDivSecondary";

export default {
  components: { LoginCard, Div },
};
</script>

<style>
.row {
  max-width: 100%;
}
.midCol {
  top: 30%;
  height: fit-content;
}
.landingContainer {
  padding: 30px 50px;
  height: 100vh;
}
body {
  background-color: inherit;
}
.landingText {
  margin-bottom: 30px;
  font-weight: bolder;
}
@media screen and (max-width: 700px) {
  .landingContainer {
    padding: 30px 10px;
  }
  .midCol {
    top: 20px;
  }
  .landingText {
    margin-bottom: 0;
    border-bottom: 1px solid;
    font-size: 2rem;
  }
}
</style>
