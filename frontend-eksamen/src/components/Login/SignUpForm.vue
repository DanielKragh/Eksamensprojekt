<template>
  <v-card class="pa-5">
    <span class="title">Sign up</span>
    <form v-on:submit.prevent="signUp" class="form mt-5">
      <input
        class="my-1 form__input form__input--email"
        type="brugernavn"
        name="emabrugernavnil"
        id="brugernavn"
        placeholder="Brugernavn"
        v-model="formData.brugernavn"
        required
      />
      <input
        class="my-1 form__input form__input--email"
        type="fornavn"
        name="fornavn"
        id="fornavn"
        placeholder="Fornavn"
        v-model="formData.fornavn"
        required
      />
      <input
        class="my-1 form__input form__input--email"
        type="efternavn"
        name="efternavn"
        id="efternavn"
        placeholder="Efternavn"
        v-model="formData.efternavn"
        required
      />
      <input
        class="my-1 form__input form__input--email"
        type="email"
        name="email"
        id="emailSignup"
        placeholder="Email"
        v-model="formData.email"
        required
      />
      <input
        class="my-1 form__input form__input--password"
        type="password"
        name="password"
        id="passwordSignup"
        placeholder="Adgangskode"
        v-model="formData.password"
        required
      />
      <div class="d-flex">
        <v-spacer></v-spacer>
        <input width="100px" type="submit" value="Sign up" class="my-1 form__input--submit" />
      </div>
    </form>
    <v-snackbar v-model="snackbarValid" color="rgb(104, 138, 163)">
      Bruger oprettet! Du kan logge ind nu!
      <template v-slot:action="{ attrs }">
        <v-btn tile depressed light v-bind="attrs" @click="snackbarValid = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      snackbarValid: false
    };
  },
  methods: {
    signUp() {
      this.model.postSignUp(this.formData).then(() => {
        this.snackbarValid = true;
        this.formData = {};
      });
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