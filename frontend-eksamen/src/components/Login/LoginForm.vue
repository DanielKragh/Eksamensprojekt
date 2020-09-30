<template>
  <v-card class="pa-5">
    <span class="title">Login</span>
    <form v-on:submit.prevent="login" class="form mt-5">
      <input
        class="my-1 form__input form__input--email"
        type="email"
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
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    login() {
      this.model.postLogin(this.formData).then(res => {
        localStorage.setItem("bruger_id", res.data.bruger_id);
        localStorage.setItem("bruger_fornavn", res.data.fornavn);
        localStorage.setItem("bruger_efternavn", res.data.efternavn);
        this.$router.push("/");
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