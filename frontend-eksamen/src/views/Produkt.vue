<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" class="py-0 bread-con">
        <v-breadcrumbs class="py-1" v-if="produkt" :items="breadcrumbs" divider=">"></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <v-row>
          <v-col cols="12" sm="9" class="produkt mt-10" v-if="produkt">
            <div class="bag__rating d-flex">
              <v-icon @click="rateProdukt(1)" :color="rating > 0 ? '#ffd335':''">mdi-star</v-icon>
              <v-icon @click="rateProdukt(2)" :color="rating > 1 ? '#ffd335':''">mdi-star</v-icon>
              <v-icon @click="rateProdukt(3)" :color="rating > 2 ? '#ffd335':''">mdi-star</v-icon>
              <v-icon @click="rateProdukt(4)" :color="rating > 3 ? '#ffd335':''">mdi-star</v-icon>
              <v-icon @click="rateProdukt(5)" :color="rating > 4 ? '#ffd335':''">mdi-star</v-icon>
              <div>
                <span class="ml-2">{{produkt.rating.length}} Ratings</span>
              </div>
            </div>
            <h1 class="produkt__titel">
              {{produkt.titel}}
              <span class="caption ml-5">
                <v-icon small color="red">mdi-heart</v-icon>
                {{produkt.likes}} likes
              </span>
            </h1>
            <h3 class="produkt__subtitel">{{produkt.kategori.titel}}</h3>
            <div class="produkt__details-con my-10">
              <div
                class="produkt__details-con-img"
                :style="'background-image:url(/assets/images/produkter/'+produkt.image+')'"
              ></div>
              <p class="produkt__details-con-text"></p>
            </div>
          </v-col>
          <v-col cols="12" sm="3" class="pr-0 mt-10">
            <v-row>
              <v-col class="pt-0">
                <Like @likeProdukt="likeProdukt" />
              </v-col>
            </v-row>
            <v-row class="pt-10">
              <v-col>
                <Ingredienser v-if="produkt" :ingredienser="produkt.ingredienser" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <Kommentar
          v-if="produkt"
          :kommentar="produkt.kommentar"
          :produkt="produkt"
          @reload="getProdukt"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Like from "../components/Produkt/Like";
import Ingredienser from "../components/Produkt/Ingredienser";
import Kommentar from "../components/Produkt/Kommentar";
export default {
  components: {
    Like,
    Ingredienser,
    Kommentar
  },
  data() {
    return {
      produkt: undefined,
      breadcrumbs: undefined,
      rating: undefined
    };
  },
  methods: {
    async rateProdukt(rating) {
      const checkUser = async () => {
        if (this.produkt.rating.length) {
          return this.produkt.rating.map(r => {
            if (r.bruger._id === localStorage.getItem("bruger_id")) {
              return false;
            } else {
              return true;
            }
          });
        } else {
          return [true];
        }
        
      };
      this.log(checkUser());
      checkUser().then(res => {
        this.log(res[0]);

        let data = {
          rating: rating,
          produkt: this.produkt._id,
          bruger: localStorage.getItem("bruger_id")
        };
        this.log(data);
        this.log(res[0]);
        if (res[0]) this.model.postRating(data).then(() => this.getProdukt());
      });
    },
    likeProdukt() {
      this.model
        .patchLikeProdukt(this.$route.params.produktId)
        .then(() => {
          this.getProdukt();
        })
        .catch(err => this.log(err));
    },
    getProdukt() {
      this.model
        .getProduktFraId(this.$route.params.produktId)
        .then(res => {
          this.log(res.data);
          this.produkt = res.data;
          this.breadcrumbs = [
            {
              text: "Produkter",
              disabled: false,
              href: "/produkter"
            },
            {
              text: this.produkt.titel,
              disabled: true,
              href: "/produkt/" + this.produkt._id
            }
          ];
        })
        .then(() => {
          document.querySelector(
            ".produkt__details-con-text"
          ).innerHTML = this.produkt.beskrivelse;
          this.log(this.produkt);
          let arr = [];
          this.produkt.rating.map(r => arr.push(r.rating));
          this.log(arr);
          this.log(arr.reduce((a, b) => (b += a), 0));
          let sum = arr.reduce((a, b) => (b += a), 0);
          this.rating = sum / arr.length;
        })
        .catch(err => this.log(err));
    }
  },
  mounted() {
    this.getProdukt();
  }
};
</script>

<style lang="scss" scoped>
.bread-con {
  background-color: #fff;
  border: rgba(128, 128, 128, 0.363) solid 1px;
}
.produkt {
  &__titel {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
  }
  &__subtitel {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: rgb(163, 163, 163);
  }
  &__details-con {
    &-img {
      float: left;
      width: 200px;
      height: 200px;
      margin: 0 20px 0 0;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
</style>