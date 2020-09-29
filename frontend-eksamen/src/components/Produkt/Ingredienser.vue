<template>
  <div>
    <h4 class="mb-3">Ingredienser</h4>
    <div v-for="item in ingredienser" :key="item._id" class="text-center ingrediens-box">
      <span class="ingrediens-box__titel">{{item.ingrediens_titel}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredienser: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.ingrediens-box{
  border: 1px solid rgba(128, 128, 128, 0.377);
  background-color: #fff;
  padding: 5px 0;
  &__titel{
    font-size: 12px;
  }
}
</style>