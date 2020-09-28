<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h2>Vi skaber lækkert! brød</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Achitecto magnam ratione vel sapiente sunt impedit. Laborum corporis non veniam alias distinctio?</p>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="12" sm="8" offset-sm="2">
          <v-row>
            <v-col cols="12" sm="4" v-for="(nyhed,i) in nyheder" :key="i">
              <div class="nyhed">
                <div
                  class="nyhed__img-con"
                  :style="'background-image:url(assets/images/brød/'+nyhed.image+')'"
                ></div>
                <p class="nyhed__title">{{nyhed.titel}}</p>
                <p class="nyhed__text">{{nyhed.teaser}}</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      nyheder: []
    };
  },
  mounted() {
    for (let i = 0; i < 3; i++) {
      this.nyheder.push(
        this.alleNyheder
          .map(function(e) {
            return e;
          })
          .sort()[i]
      );
      this.log(this.nyheder);
    }
  },
  computed: {
    ...mapState({
      alleNyheder: state => state.BagerietData.alleNyheder
    })
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