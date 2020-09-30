<template>
  <section class="kommentar mt-10">
    <v-row class="kommentar-antal elevation-1">
      <v-col cols="12" class="d-flex">
        <span class="kommentar-antal__titel">kommentar</span>
        <v-spacer></v-spacer>
        <span class="kommentar-antal__text mr-1 pt-1">{{kommentar.length}}</span>
        <v-icon x-small>mdi-message</v-icon>
      </v-col>
    </v-row>
    <v-row class="ny-kommentar mt-2 elevation-1">
      <v-col cols="12" class="d-flex py-0 pr-0">
        <v-icon>mdi-pencil</v-icon>
        <textarea
          name="kommentar"
          id="kommentar-felt"
          cols="100"
          rows="1"
          placeholder="Fortæl os hvad du syntes..."
          class="my-2 mx-4"
          v-model="kommentaren"
        ></textarea>
        <v-spacer></v-spacer>
        <v-btn
          color="rgb(104, 138, 163)"
          height="40px"
          width="15%"
          x-small
          dark
          tile
          depressed
          @click="send"
        >Indsæt</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-0">
        <v-card v-for="item in visiblePages" :key="item._id" class="mb-1 elevation-1">
          <v-row>
            <v-col cols="12" md="4" lg="2">
              <div class="kommentar__img-con">
                <v-icon class="kommentar__bruger-icon" size="60px" color="white">mdi-account</v-icon>
              </div>
            </v-col>
            <v-col cols="12" md="8" lg="10">
              <v-row>
                <v-col cols="12" class="py-0">
                  <span class="kommentar__bruger">{{item.bruger.fornavn}} {{item.bruger.efternavn}}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0">
                  <span
                    class="kommentar__dato"
                  >{{new Date(item.oprettet).getDate()}} {{months[new Date(item.oprettet).getMonth()]}} kl {{new Date(item.oprettet).getHours()}}:{{10 > parseInt(new Date(item.oprettet).getMinutes()) ? '0'+new Date(item.oprettet).getMinutes() :new Date(item.oprettet).getMinutes()}} {{new Date(item.oprettet).getFullYear()}}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <span class="kommentar__text">{{item.kommentaren}}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-pagination
          v-model="page"
          :length="Math.ceil(kommentar.length/perPage)"
          :total-visible="5"
          color="rgb(104, 138, 163)"
        ></v-pagination>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    kommentar: {
      type: Array
    },
    produkt: Object
  },
  data() {
    return {
      kommentaren: undefined,
      page: 1,
      perPage: 3,
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  },
  methods: {
    send() {
      if (this.kommentaren && this.loggedin) {
        this.model
          .postProduktKommentar({
            titel: "titel ikke udfyldt",
            kommentaren: this.kommentaren,
            bruger: localStorage.getItem("bruger_id"),
            produkt: this.produkt._id
          })
          .then(() => {
            this.kommentaren = "";
            this.$emit("reload");
          });
      }
    }
  },
  mounted() {
    this.log(localStorage.getItem("bruger_id"));
  },
  computed: {
    ...mapState({
      loggedin: state => state.BagerietData.loggedin
    }),
    visiblePages() {
      return this.kommentar.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.kommentar-antal {
  background-color: #fff;
  &__titel {
    font-weight: 700;
  }
  &__text {
    font-size: 12px;
  }
}
.ny-kommentar {
  background-color: #fff;
  #kommentar-felt {
    font-size: 12px;
    padding-top: 4px;
  }
}
.kommentar {
  &__img-con {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(104, 138, 163);
    margin: auto;
    position: relative;
  }
  &__bruger-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__bruger {
    font-weight: 600;
  }
  &__dato {
    font-size: 10px;
  }
  &__text {
    font-size: 12px;
  }
}
</style>