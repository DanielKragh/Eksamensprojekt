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
              <h2>Produkter</h2>
            </v-col>
            <v-col cols="12">
              <BagCard v-if="items" :items="items" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Nyheder</h2>
            </v-col>
            <v-col cols="12" sm="4" md="3" v-for="nyhed in nyheder" :key="nyhed._id">
              <div class="nyhed">
                <div
                  class="nyhed__img-con"
                  :style="'background-image:url(/assets/images/brød/'+nyhed.image+')'"
                ></div>
                <p class="nyhed__title">{{nyhed.titel}}</p>
                <p class="nyhed__text">{{nyhed.teaser}}</p>
                <v-btn
                  outlined
                  tile
                  width="100%"
                  height="35px"
                  small
                  @click="$router.push({name: 'Nyhed',params:{nyhedId: nyhed._id}})"
                >se mere</v-btn>
              </div>
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
      items: undefined,
      nyheder: undefined
    };
  },
  methods: {
    getResult() {
      this.model.getSearchResult(this.$route.params.searchword).then(res => {
        this.log(res.data);
        this.items = res.data;
      });
      this.model.getSeogtNyhed(this.$route.params.searchword).then(res => {
        this.log(res.data);
        this.nyheder = res.data;
      });
    }
  },
  mounted() {
    this.getResult();
  },
  watch: {
    "$route.params.searchword": function() {
      this.getResult();
    }
  }
};
</script>

<style lang="scss" scoped>
.nyhed {
  text-align: center;
  &__img-con {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto 20px auto;
  }
  &__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
  }
  &__text {
    font-weight: 400;
    font-size: 10px;
  }
}
</style>