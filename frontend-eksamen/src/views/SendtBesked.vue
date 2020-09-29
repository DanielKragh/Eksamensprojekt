<template>
   <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h1>Sendt besked</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <p class="font-weight-bold">{{sendtBesked.navn}}</p>
          <p>{{sendtBesked.email}}</p>
          <p>{{sendtBesked.emne}}</p>
          <p>{{sendtBesked.besked}}</p>
       <v-btn @click="$router.go(-1)" dark color="rgb(104, 138, 163)">Tilbage</v-btn>
        </v-col>
      </v-row>
    </v-container>
   </section>
</template>

<script>
import { mapState } from 'vuex';
  export default {
      computed: {
    ...mapState({
      sendtBesked: state => state.BagerietData.sendtBesked
    })
  },
    
  }
</script>

<style lang="scss" scoped>

</style>