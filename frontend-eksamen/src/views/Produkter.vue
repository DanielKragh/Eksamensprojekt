<template>
  <section class="produkter my-10">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h1 class="my-5">Vores elskede bagværk</h1>
          <p
            class="mb-10"
          >Lorem ipsum dolor sit amet, blanditiis rem voluptatibus mollitia incidunt sunt dolorem. Explicabo doloribus dicta voluptatibus similique totam fugit!</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <v-row>
            <v-col cols="12" sm="3">
              <v-list dense>
                <v-list-item-group v-model="selectedKategory">
                  <v-list-item v-for="(item, i) in kategories" :key="i">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.titel" class="text-right list-title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col cols="12" sm="9">
              <BagCard :items="items" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BagCard from "../components/Produkter/BagCard";
import { mapState } from "vuex";

export default {
  name: "Produkter",
  components: {
    BagCard
  },
  data() {
    return {
      items: undefined,
      kategories: undefined,
      selectedKategory: 0
    };
  },
  methods: {
    filterKategories() {
      this.items = this.alleProdukter.filter(
        p => p.kategori._id === this.kategories[this.selectedKategory]._id
      );
    }
  },
  mounted() {
    this.model
      .getAlleKategorier()
      .then(res => {
        this.log(res.data);
        this.kategories = res.data;
      })
      .then(() => {
        this.items = this.alleProdukter.filter(
          p => p.kategori._id === this.kategories[0]._id
        );
      }).catch(err => this.log(err));
  },
  computed: {
    ...mapState({
      alleProdukter: state => state.BagerietData.alleProdukter
    })
  },
  watch: {
    selectedKategory() {
      this.filterKategories();
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list{
  background-color: rgb(245 245 245) !important;
}
.v-list-item--link:before {
  background-color: #fff;
 
}
.list-title{
    text-transform: uppercase;
}
.v-item--active {
  .list-title {
    color: #000;
    font-weight: 700 !important;
    text-transform: uppercase;
  }
}
</style>