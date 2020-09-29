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
      <v-spacer></v-spacer>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/')">Forside</v-btn>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/produkter')">Produkter</v-btn>
      <h1 class="mx-10">bageriet</h1>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/kontakt')">Kontakt</v-btn>
      <v-btn v-if="!mobile" x-small text @click="$router.push('/login')">Login</v-btn>
      <v-spacer></v-spacer>
      <div class="search">
        <input class="search__input" />
        <v-btn height="30px">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Forside</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Produkter</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    mobile: false
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 30px;
  right: 20px;
  display: flex;
  @media only screen and (max-width: 1000px) {
    top: 57px;
    right: 50%;
    transform: translate(50%, 50%);
  }
  &__input {
    background-color: rgba(255, 255, 255, 0);
    border: #fff solid 1px;
    border-radius: 5px;
    height: 30px;
  }
}
</style>