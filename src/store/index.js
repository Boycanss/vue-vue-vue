import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const Theme = new Vuex.Store({
  state: {
    light: true,
  },
  mutations: {
    toggleTheme(state) {
      state.light = !state.light;
    },
  },
  actions: {},
  modules: {},
});

export const Collab = new Vuex.Store({
  state: {
    collaborators: [],
    searchData: [],
    searchKey: "",
  },
  mutations: {
    getCollaborators(state) {
      const roles = [
        { id: 1, role: "Android Developer" },
        { id: 2, role: "Backend Developer" },
        { id: 3, role: "Frontend Developer" },
        { id: 4, role: "Data Scientist" },
      ];
      axios.get("https://randomuser.me/api/?results=12").then((res) => {
        const { results } = res.data;
        results.forEach((data) => {
          const rol = Math.floor(Math.random() * 4);
          data["role"] = roles[rol];
        });
        state.collaborators = results;
        state.searchData = results;
      });
    },
    search(state, keyword) {
      state.searchKey = keyword;
      const result = [];
      const data = state.searchData;
      data.forEach((dt) => {
        const fullName = dt.name.first + " " + dt.name.last;
        const name = fullName.toLowerCase();
        const res = name.search(`${keyword}`);
        if (res !== -1) {
          result.push(dt);
        } else {
          return;
        }
      });
      state.collaborators = result;
    },
  },
});

export const Auth = new Vuex.Store({
  state: {
    loggedInUser: {},
    errormsg: "",
  },
  mutations: {
    login(state, loginData) {
      const data = Collab.state.collaborators;
      state.errormsg == "";
      //check username
      const uname = data.filter((user) => {
        return user.login.username === loginData.username;
      });
      //check password
      if (uname[0] && uname[0].login.password === loginData.password) {
        state.loggedInUser = uname[0];
        localStorage.setItem("loggedInUser", JSON.stringify(uname[0]));
        window.location.reload();
      } else {
        state.errormsg = "Wrong username or password";
      }
    },
  },
});
