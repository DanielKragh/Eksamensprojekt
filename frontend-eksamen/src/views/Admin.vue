<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>Admin</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" xl="6">
            <AdminProdukter />
          </v-col>
          <v-col cols="12" xl="6">
            <AdminNyheder />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminNyheder from "../components/Admin/AdminNyheder";
import AdminProdukter from "../components/Admin/AdminProdukter";
export default {
  components: {
    AdminNyheder,
    AdminProdukter
  }
};
</script>

<style lang="scss" scoped>
</style>