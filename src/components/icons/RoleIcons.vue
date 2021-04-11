<template>
  <div class="flexCol colorIconContainer">
    <div
      class="colorIcon"
      v-for="c in roleColors"
      :key="c.id"
      :style="`background-color: ${c.color}`"
      v-on:mouseover="onHover(c.id)"
      v-on:mouseleave="onHover(c.id)"
    >
      <span v-if="showText">{{ c.role }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
      roleColors: [
        { id: 1, color: "green", role: "Android developer" },
        { id: 2, color: "yellow", role: "Backend developer" },
        { id: 3, color: "midnightblue", role: "Frontend developer" },
        { id: 4, color: "brown", role: "Data Scientist" },
      ],
    };
  },
  methods: {
    onHover(id) {
      this.showText = !this.showText;
      console.log(this.roleColors[id - 1].role);
    },
  },
};
</script>

<style>
.colorIcon {
  width: 25px;
  height: 25px;
  border-radius: 8px;
  transition: 0.2s;
}
.colorIcon:hover {
  transform: scale(1.2);
}
.colorIconContainer {
  height: 280px;
  position: sticky;
  padding-top: 110px;
  top: -40px;
  left: 10px;
  justify-content: space-between;
  width: 50px;
}

@media screen and (max-width: 700px) {
  div.flexCol.colorIconContainer {
    display: none;
  }
}
</style>
