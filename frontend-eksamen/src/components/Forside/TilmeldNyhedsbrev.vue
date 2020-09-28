<template>
  <section class="tilmeld">
    <v-container>
      <v-row class="py-2">
        <v-col cols="12" sm="8" offset-sm="2">
          <h2 class="white--text">Tilmeld dig vores nyhedsbrev</h2>
          <p
            class="white--text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam!</p>
          <v-form>
            <div class="form my-10">
              <div class="form__icon">
                <v-icon small color="white">mdi-email-outline</v-icon>
              </div>
              <input
                v-model="tilmeldingsEmail"
                type="email"
                class="form__input"
                placeholder="indtast din email..."
                required
              />
              <v-btn
                height="30px"
                type="submit"
                small
                tile
                depressed
                color="#688aa3"
                dark
                @click.prevent="tilmeld"
              >Tilmeld</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbarInvalid" color="red">
      Email ikke godkendt
      <template v-slot:action="{ attrs }">
        <v-btn tile depressed dark v-bind="attrs" @click="snackbarInvalid = false">Close</v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbarValid" color="#9fb9cc">
      Email tilmeldt nyhedsbrev
      <template v-slot:action="{ attrs }">
        <v-btn tile depressed light v-bind="attrs" @click="snackbarValid = false">Close</v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "TilmeldNyhedsbrev",
  data() {
    return {
      tilmeldingsEmail: undefined,
      valid: false,
      snackbarInvalid: false,
      snackbarValid: false
    };
  },
  methods: {
    tilmeld() {
      this.valid = this.validateEmail(this.tilmeldingsEmail);
      this.log(this.validateEmail(this.tilmeldingsEmail));
      this.log(this.tilmeldingsEmail);
      if (this.valid) {
        this.model
          .postNyhedsbrevTilmelding({ email: this.tilmeldingsEmail })
          .then(() => {
            this.snackbarValid = true;
            this.tilmeldingsEmail = "";
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
.tilmeld {
  background-image: url("./newsletterbg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .form {
    display: flex;
    height: 30px;
    &__icon {
      text-align: center;
      height: 30px;
      width: 30px;
      padding-top: 1px;
      background-color: #9fb9cc;
    }
    &__input {
      background-color: #fff;
      width: 80%;
      font-size: 10px;
      padding-left: 10px;
    }
  }
}
</style>