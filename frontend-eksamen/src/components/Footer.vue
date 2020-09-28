<template>
  <v-footer dark padless color="#333333">
    <v-container fluid class="py-0 footer">
      <v-btn @click="goToTop" x-small fab light class="btn__go-top">
        <v-icon size="30px">mdi-chevron-up</v-icon>
      </v-btn>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <h2 class="mx-10 text-center pb-2">bageriet</h2>

          <p
            class="mb-0 text-center grey--text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem itaque quaerat incidunt perspiciatis enim.</p>
        </v-col>
      </v-row>
      <v-row class="copy">
        <v-col cols="12">
          <p
            class="mb-0 text-center grey--text"
          >Copyright &copy; {{ new Date().getFullYear() }} bageriet aps</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn__go-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.copy {
  background-color: #252525;
}
</style>