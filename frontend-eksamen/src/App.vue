<template>
  <v-app>
    <Navigation />
    <v-main style="background-color: rgb(245 245 245);">
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <router-view v-if="!loading"></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    loading: true
  }),
  methods: {
    ...mapMutations("BagerietData", [
      "setAlleNyheder",
      "setAlleProdukter",
      "setLoggedin"
    ])
  },
  mounted() {
    this.model
      .getAllNyheder()
      .then(res => {
        this.log(res.data);
        this.setAlleNyheder(res.data);
      })
      .then(() => {
        this.model
          .getAllProdukter()
          .then(res => {
            this.log(res.data);
            this.setAlleProdukter(res.data);
          })
          .then(() => {
            this.loading = false;
          })
          .catch(err => this.log(err));
      })
      .catch(err => this.log(err));
    this.model
      .getLoggedin()
      .then(res => {
        this.log("Logged in: " + res.data.message);
        this.setLoggedin(res.data.message);
      })
      .then(() => {
        if (!this.loggedin) {
          if (
            this.$route.path.includes("profil") ||
            this.$route.path.includes("admin")
          ) {
            this.$router.push({ name: "Forside" });
          }
        }
      })
      .catch(() => this.log("ikke logged in"));
  },
  watch: {
    $route() {
      this.model
        .getLoggedin()
        .then(res => {
          this.log("Logged in: " + res.data.message);
          this.setLoggedin(res.data.message);
        })
        .catch(() => this.log("ikke logged in"));
    },
    loggedin() {
      if (!this.loggedin) {
        if (
          this.$route.path.includes("profil") ||
          this.$route.path.includes("admin")
        ) {
          this.$router.push({ name: "Forside" });
        }
      }
    }
  },
  computed: {
    ...mapState({
      loggedin: state => state.BagerietData.loggedin
    })
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
