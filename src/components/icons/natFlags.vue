<template>
  <abbr :title="`${nat}`">
    <img
      :style="`cursor:default`"
      :src="`https://www.countryflags.io/${nat}/flat/64.png`"
      class="natFlag"
    />
  </abbr>
</template>

<script>
export default {
  props: ["nat"],
};
</script>

<style>
.natFlag {
  width: 25px;
  border-radius: 30px;
}
abbr {
  text-decoration: none;
  cursor: default;
  width: fit-content;
  margin: auto;
}
abbr:hover {
  cursor: default;
}
</style>
