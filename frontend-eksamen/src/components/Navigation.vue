<template>
  <div>
    <v-app-bar
      :color="$route.name === 'Forside' ?'#688aa300':'#688aa3'"
      dark
      flat
      height="90px"
      :absolute="$route.name === 'Forside'"
    >
      <v-app-bar-nav-icon v-if="mobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="search" v-if="!mobile">
        <input
          class="search__input"
          v-model="searchWord"
          @keydown.enter="$router.push({name: 'SearchResult', params: {searchword: searchWord}})"
        />
        <v-btn
          height="30px"
          @click="$router.push({name: 'SearchResult', params: {searchword: searchWord}})"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/')">Forside</v-btn>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/produkter')">Produkter</v-btn>
      <h1 class="mx-10">bageriet</h1>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/kontakt')">Kontakt</v-btn>
      <!-- <v-btn v-if="!mobile && loggedin" x-small text @click="$router.push('/admin')">Admin</v-btn> -->
      <!-- <v-btn v-if="!mobile && loggedin" x-small text @click="$router.push('/profil')">Profil</v-btn> -->
      <v-btn v-if="!mobile && !loggedin" x-small text @click="$router.push('/login')">Login</v-btn>
      <v-btn v-if="!mobile && loggedin" x-small text @click="logud">Logud</v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y v-if="loggedin">
        <template v-slot:activator="{ on, attrs }">
          <div class="d-flex profil-btn" v-if="loggedin">
            <v-btn
              v-bind="attrs"
              v-on="on"
              fab
              color="white"
              height="40px"
              width="40px"
              min-width="40px"
            >
              <v-icon color="rgb(104, 138, 163)">mdi-account</v-icon>
            </v-btn>
            <span class="pt-2 pl-3">{{fornavn}}</span>
            <span class="pt-2 pl-1">{{efternavn}}</span>
          </div>
        </template>

        <v-list>
          <v-list-item @click="$router.push('/admin')">
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/profil')">
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="black--text ">
          <v-list-item class="text-center" @click="$router.push('/')">
            <v-list-item-title>Forside</v-list-item-title>
          </v-list-item>
          <v-list-item class="text-center" @click="$router.push('/produkter')">
            <v-list-item-title>Produkter</v-list-item-title>
          </v-list-item>
          <v-list-item class="text-center" @click="$router.push('/kontakt')">
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item v-if="loggedin" class="text-center" @click="$router.push('/admin')">
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item>-->
          <!-- <v-list-item v-if="loggedin" class="text-center" @click="$router.push('/profil')">
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>-->
          <v-list-item v-if="!loggedin" class="text-center" @click="$router.push('/login')">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="loggedin" class="text-center" @click="logud">
            <v-list-item-title>Logud</v-list-item-title>
          </v-list-item>

          <div class="search-mobile ma-2 mr-10 text-center">
            <input
              class="search-mobile__input"
              v-model="searchWord"
              @keydown.enter="$router.push({name: 'SearchResult', params: {searchword: searchWord}})"
            />
            <v-btn
              height="30px"
              @click="$router.push({name: 'SearchResult', params: {searchword: searchWord}})"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
    mobile: false,
    searchWord: undefined,
    fornavn: undefined,
    efternavn: undefined
  }),
  methods: {
    logud() {
      this.model.getLogud().then(() => {
        localStorage.removeItem("bruger_id");
        localStorage.removeItem("bruger_fornavn");
        localStorage.removeItem("bruger_efternavn");
        this.$router.go();
      });
    }
  },
  mounted() {
    this.fornavn = localStorage.getItem("bruger_fornavn");
    this.efternavn = localStorage.getItem("bruger_efternavn");
    let inner = window.innerWidth;
    if (inner < 1100) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        inner = window.innerWidth;
        if (inner < 1100) {
          this.mobile = true;
        } else {
          this.mobile = false;
          this.drawer = false;
        }
      });
    });
  },
  computed: {
    ...mapState({
      loggedin: state => state.BagerietData.loggedin
    })
  },
  watch: {
    group() {
      this.drawer = false;
    },
    loggedin() {
      if (this.loggedin) {
        this.fornavn = localStorage.getItem("bruger_fornavn");
        this.efternavn = localStorage.getItem("bruger_efternavn");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 30px;
  left: 20px;
  display: flex;

  &__input {
    background-color: rgba(255, 255, 255, 0);
    border: rgb(182, 182, 182) solid 1px;
    border-radius: 5px;
    height: 30px;
  }
}
.search-mobile {
  position: relative;
  width: 100%;
  &__input {
    background-color: rgba(231, 231, 231, 0.507);
    border: rgb(182, 182, 182) solid 1px;
    border-radius: 5px;
    height: 30px;
  }
}
.profil-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>