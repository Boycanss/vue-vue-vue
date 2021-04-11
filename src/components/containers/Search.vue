<template>
  <b-form-input
    class="inputSearch"
    v-model="search"
    placeholder="search employee"
    type="text"
  ></b-form-input>
</template>

<script>
import { Collab } from "../../store/index";

export default {
  data() {
    return {
      search: Collab.state.searchKey,
    };
  },
  watch: {
    search: (keyword) => {
      const key = keyword.toLowerCase();
      console.log(key);
      Collab.commit("search", key);
    },
  },
};
</script>

<style></style>
