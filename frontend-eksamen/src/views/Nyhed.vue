<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" class="py-0 bread-con">
        <h1 class="text-center">Nyhed</h1>
        <h2 class="text-center">{{nyhed.titel}}</h2>
        <p class="font-weight-light text-center">{{nyhed.teaser}}</p>
        <p class="nyhed"></p>
      </v-col>
      <v-col cols="12" sm="8" offset-sm="2" class="py-0 bread-con text-center">
        <v-btn dark color="rgb(104, 138, 163)" @click="$router.go(-1)">Tilbage</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nyhed: undefined
    };
  },
  mounted() {
    this.model
      .getNyhedFraId(this.$route.params.nyhedId)
      .then(res => {
        this.nyhed = res.data;
      })
      .then(() => {
        document.querySelector(".nyhed").innerHTML = this.nyhed.nyhedstekst;
      });
  }
};
</script>

<style lang="scss" scoped>
</style>