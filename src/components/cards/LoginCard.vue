<template>
  <Div>
    <div class="loginContainer" v-on:keyup.enter="login">
      <span class="error" v-if="error.length > 0">{{ error }}</span
      ><br v-if="error.length > 0" />
      <span>Username:</span>
      <b-form-input
        v-model="username"
        placeholder="username"
        type="text"
      ></b-form-input>
      <br />
      <span>Password:</span>
      <b-form-input v-model="password" placeholder="********" type="password">
      </b-form-input>
      <br />
      <b-button class="loginButton" variant="primary" v-on:click="login"
        >Login</b-button
      >
    </div>
  </Div>
</template>

<script>
import Div from "../ThemedDivSecondary";
import { Auth, Collab } from "../../store/index";

export default {
  components: { Div },
  data() {
    return {
      error: "",
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      if (username.length === 0 || password.length === 0) {
        this.error = "Please fill in the blank field";
      } else {
        Auth.commit("login", {
          username: username,
          password: password,
        });
      }
    },
  },
  mounted() {
    Auth.watch(
      (state) => state.errormsg,
      () => {
        this.error = Auth.state.errormsg;
      }
    );
    Collab.watch(
      (state) => state.collaborators,
      () => {
        console.log(
          "username: ",
          Collab.state.collaborators[0].login.username,
          "password: ",
          Collab.state.collaborators[0].login.password
        );
      }
    );
  },
};
</script>

<style>
.loginButton {
  margin-bottom: 60px;
  width: 100%;
}
.loginContainer {
  border-radius: 30px;
  padding: 0 50px;
}
.error {
  color: red;
}

@media screen and (max-width: 1000px) {
  .loginContainer {
    padding: 0 10px;
  }
}
</style>
