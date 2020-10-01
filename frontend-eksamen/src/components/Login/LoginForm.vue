<template>
  <v-card class="pa-5">
    <span class="title">Login</span>
    <form v-on:submit.prevent="login" class="form mt-5">
      <input
        class="my-1 form__input form__input--email"
        name="email"
        id="email"
        placeholder="Email"
        v-model="formData.email"
        required
      />
      <input
        class="my-1 form__input form__input--password"
        type="password"
        name="password"
        id="password"
        placeholder="Adgangskode"
        v-model="formData.password"
        required
      />
      <div class="d-flex">
        <v-spacer></v-spacer>
        <input width="100px" type="submit" value="Login" class="my-1 form__input--submit" />
      </div>
    </form>
    <v-snackbar v-model="snackbarInvalid" color="red">
      Email ikke godkendt
      <template v-slot:action="{ attrs }">
        <v-btn tile depressed dark v-bind="attrs" @click="snackbarInvalid = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      valid: false,
      snackbarInvalid: false
    };
  },
  methods: {
    login() {
      this.valid = this.validateEmail(this.formData.email);
      this.log(this.validateEmail(this.formData.email));
      this.log(this.formData.email);
      if (this.valid) {
        this.model.postLogin(this.formData).then(res => {
          localStorage.setItem("bruger_id", res.data.bruger_id);
          localStorage.setItem("bruger_fornavn", res.data.fornavn);
          localStorage.setItem("bruger_efternavn", res.data.efternavn);
          this.log(res.data);
          this.model.getBrugerFraId(res.data.bruger_id).then(res => {
            localStorage.setItem("bruger_rolle", res.data.rolle);
          });
          this.$router.push("/");
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
.form {
  &__input {
    padding: 10px 15px;
    font-size: 12px;
    background-color: rgb(248, 248, 248);

    &--email {
      width: 100%;
    }
    &--password {
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
</style>