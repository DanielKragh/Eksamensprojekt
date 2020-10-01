<template>
  <div class="bag mt-5">
    <div
      class="bag__img-con"
      :style="'background-image:url(/assets/images/produkter/'+item.image+')'"
    >
      <div class="bag__rating">
        <v-icon :color="rating > 0 ? '#ffd335':''">mdi-star</v-icon>
        <v-icon :color="rating > 1 ? '#ffd335':''">mdi-star</v-icon>
        <v-icon :color="rating > 2 ? '#ffd335':''">mdi-star</v-icon>
        <v-icon :color="rating > 3 ? '#ffd335':''">mdi-star</v-icon>
        <v-icon :color="rating > 4 ? '#ffd335':''">mdi-star</v-icon>
      </div>
    </div>
    <div class="mb-2" v-if="item.kommentar">
      <span class="grey--text bag__comments">{{item.likes}}</span>
      <v-icon x-small>mdi-heart</v-icon>|
      <span class="grey--text bag__comments">{{item.kommentar.length}}</span>
      <v-icon x-small>mdi-message</v-icon>
    </div>
    <p class="bag__title">{{item.titel}}</p>
    <p class="bag__text">{{item.teaser.substring(0, 70) + '...'}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      rating: undefined
    };
  },
  mounted() {
    this.log(this.item);
    let arr = [];
    this.item.rating.map(r => arr.push(r.rating));
    this.log(arr);
    this.log(arr.reduce((a, b) => (b += a), 0));
    let sum = arr.reduce((a, b) => (b += a), 0);
    this.rating = sum / arr.length;
  },
  watch: {
    item() {
       this.log(this.item);
    let arr = [];
    this.item.rating.map(r => arr.push(r.rating));
    this.log(arr);
    this.log(arr.reduce((a, b) => (b += a), 0));
    let sum = arr.reduce((a, b) => (b += a), 0);
    this.rating = sum / arr.length;
    }
  },
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