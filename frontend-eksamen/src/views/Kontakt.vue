<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" offset-sm="2" class="text-center">
          <h1>Kontakt os</h1>
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
            <v-col cols="12" sm="6">
              <form v-on:submit.prevent="send" class="form">
                <input
                  class="white my-1 form__input form__input--navn"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Dit navn..."
                  required
                  v-model="formData.navn"
                />
                <input
                  class="white my-1 form__input form__input--email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Din email..."
                  v-model="formData.email"
                  required
                />
                <input
                  class="white my-1 form__input form__input--email"
                  type="emne"
                  name="emne"
                  id="emne"
                  placeholder="Dit emne..."
                  v-model="formData.emne"
                  required
                />
                <textarea
                  class="white my-1 form__input form__input--besked"
                  name="besked"
                  id="besked"
                  cols="30"
                  rows="10"
                  placeholder="Din besked..."
                  required
                  v-model="formData.besked"
                ></textarea>
                <div class="d-flex">
                  <v-spacer></v-spacer>
                  <input
                    width="100px"
                    type="submit"
                    value="Send"
                    class="my-1 form__input--submit"
                  />
                </div>
              </form>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="mb-1">
                <span class="font-weight-bold">addresse:</span> Øster uttrupvej 1 9200 aalborg
              </p>
              <p>
                <span class="font-weight-bold">telefon:</span> +45 25 26 95 40
              </p>
              <div class="map">
                <v-map :zoom="13" :center="[57.047680, 9.967620]">
                  <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
                </v-map>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbarInvalid" color="red">
      Email ikke godkendt
      <template v-slot:action="{ attrs }">
        <v-btn tile depressed dark v-bind="attrs" @click="snackbarInvalid = false">Close</v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Kontakt",
  data() {
    return {
      formData: {},
      valid: false,
      snackbarInvalid: false
    };
  },
  methods: {
    ...mapMutations("BagerietData", ["setSendtBesked"]),

    send() {
      this.valid = this.validateEmail(this.formData.email);
      this.log(this.validateEmail(this.formData.email));
      this.log(this.formData.email);
      if (this.valid) {
        this.model.postKontakt(this.formData).then(() => {
          this.setSendtBesked(this.formData);
          this.formData = {};
          this.$router.push({ name: "SendtBesked" });
        });
      } else {
        this.snackbarInvalid = true;
      }
    },
    validateEmail(email) {
      let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~leaflet/dist/leaflet.css";
.map {
  height: 250px;
}
.form {
  &__input {
    padding: 10px 15px;
    font-size: 12px;
    &--navn {
      width: 100%;
    }
    &--email {
      width: 100%;
    }
    &--besked {
      width: 100%;
    }
    &--submit {
      width: 100px;
      background-color: rgb(104, 138, 163);
      color: white;
      font-size: 12px;
      padding: 5px 0;
    }
  }
}
#mapid {
  height: 180px;
}
</style>