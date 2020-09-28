<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h2>Nyeste bagværk</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Achitecto magnam ratione vel sapiente sunt impedit. Laborum corporis non veniam alias distinctio?</p>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col cols="12" sm="8" offset-sm="2">
          <v-row>
            <v-col cols="12" sm="4" md="3" v-for="(item,i) in items" :key="i">
              <div class="bag mt-5">
                <div
                  class="bag__img-con"
                  :style="'background-image:url(assets/images/produkter/'+item.image+')'"
                ></div>
                <div class="mb-2">
                  <span class="grey--text bag__comments">{{item.kommentar.length}}</span>
                  <v-icon x-small>mdi-message</v-icon>
                </div>
                <p class="bag__title">{{item.titel}}</p>
                <p class="bag__text">{{item.teaser.substring(0, 70) + '...'}}</p>
              </div>
              <v-btn outlined tile width="100%" height="35px" small>se mere</v-btn>
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
      items: []
    };
  },
  methods: {
    tenRandom() {
      for (let i = 0; i < 8; i++) {
        this.items.push(
          this.alleProdukter
            .map(function(e) {
              return e;
            })
            .sort()[i]
        );
        this.log(this.items);
      }

      this.items = this.items.sort(func);

      function func() {
        return 0.5 - Math.random();
      }

      this.log(this.items);
    }
  },
  computed: {
    ...mapState({
      alleProdukter: state => state.BagerietData.alleProdukter
    })
  },
  mounted() {
    if (this.alleProdukter) this.tenRandom();
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