<template>
  <v-btn outlined tile depressed small width="50%" class="like-btn" @click="$emit('likeProdukt')">
    <span class="like-btn__text mr-2">Like!</span>
    <v-icon color="red" x-small>mdi-heart-outline</v-icon>
  </v-btn>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
.like-btn {
  float: right;
  &__text {
    font-size: 10px;
  }
}
</style>