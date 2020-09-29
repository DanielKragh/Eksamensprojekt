<template>
  <section class="produkter my-10">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h1 class="my-5">Søge resultat</h1>
          <span class="mb-10">
            Søge ord:
            <span class="font-weight-bold">{{$route.params.searchword}}</span>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <v-row>
            <v-col cols="12">
              <BagCard v-if="items" :items="items" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BagCard from "../components/Produkter/BagCard";

export default {
  components: {
    BagCard
  },
  data() {
    return {
      items: undefined
    };
  },
  methods: {
    getResult() {
      this.model.getSearchResult(this.$route.params.searchword).then(res => {
        this.log(res.data);
        this.items = res.data;
      });
    }
  },
  mounted() {
    this.getResult();
  },
  watch: {
    "$route.params.searchword": function () {
      this.getResult();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>