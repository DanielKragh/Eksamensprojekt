<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2" class="text-center">
        <v-row>
          <v-col cols="12" md="6">
            <LoginForm/>
          </v-col>
          <v-col cols="12" md="6">
            <SignUpForm/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "../components/Login/LoginForm"
import SignUpForm from "../components/Login/SignUpForm"
export default {
  components: {
    LoginForm,
    SignUpForm,
  },
};
</script>

<style lang="scss" scoped>
</style>