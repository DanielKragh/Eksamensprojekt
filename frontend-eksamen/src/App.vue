<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { mapMutations } from "vuex";

export default {
  name: "App",

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapMutations("BagerietData", ["setAlleNyheder","setAlleProdukter"])
  },
  mounted() {
    this.model.getAllNyheder().then(res => {
      this.log(res.data);
      this.setAlleNyheder(res.data);
    });
    this.model.getAllProdukter().then(res => {
      this.log(res.data);
      this.setAlleProdukter(res.data);
    });
  }
};
</script>
<style lang="scss">

* {
  font-family: "Open Sans", sans-serif;
}
body {
  overflow: hidden;
}

h1,
h2 {
  font-family: "Lobster", cursive;
  font-weight: 400;
}

p {
  font-size: 12px;
  font-weight: 400;
}

</style>
