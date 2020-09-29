<template>
  <v-row>
    <v-col cols="12" :sm="$route.path === '/produkter'?'6':'4'" :md="$route.path === '/produkter'?'4':'3'" v-for="(item,i) in items" :key="i">
      <div class="bag mt-5">
        <div
          class="bag__img-con"
          :style="'background-image:url(/assets/images/produkter/'+item.image+')'"
        ></div>
        <div class="mb-2" v-if="item.kommentar">
          <span class="grey--text bag__comments">{{item.kommentar.length}}</span>
          <v-icon x-small>mdi-message</v-icon>
        </div>
        <p class="bag__title">{{item.titel}}</p>
        <p class="bag__text">{{item.teaser.substring(0, 70) + '...'}}</p>
      </div>
      <v-btn outlined tile width="100%" height="35px" small @click="$router.push({name: 'Produkt',params:{produktId: item._id}})">se mere</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.bag {
  text-align: center;
  height: 280px;

  &__img-con {
    // border-radius: 50%;
    width: 120px;
    height: 120px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0 auto 10px auto;
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
  &__comments {
    font-size: 10px;
    padding-right: 5px;
  }
}
</style>