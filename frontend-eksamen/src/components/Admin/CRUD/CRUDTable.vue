<template>
  <v-card>
    <v-row>
      <v-col cols="9">
        <v-card-title class="pt-2">
          <v-text-field v-model="search" append-icon="mdi-magnify" dense hide-details label="Søg"></v-text-field>
        </v-card-title>
      </v-col>
      <v-col class="text-right" cols="3">
        <v-btn
          class="mt-2 mr-5"
          color="rgb(104, 138, 163)"
          dark
          depressed
          tile
          @click="$emit('create')"
        >
          <span class="caption mr-2">opret</span>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="!items"
      :search="search"
      :items-per-page="5"
      loading-text="Loading..."
    >
      <template v-slot:item.actions="{ item }">
        <div @click.stop>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon text v-if="item.kategori" @click="$emit('editIngredienser',item)">
                <v-icon>mdi-format-list-numbered</v-icon>
              </v-btn>
            </template>
            <span>Ingedienser</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }" v-if="!item.ingrediens_titel">
              <v-btn v-on="on" icon text @click="$emit('edit',item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span>Ret</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon text @click="deleteBtn(item._id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>Slet</span>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "CRUDTable",
  components: {},
  props: {
    headers: Array,
    items: Array
  },
  data() {
    return {
      opret: false,
      search: undefined
    };
  },
  methods: {
    deleteBtn(id) {
      this.$emit("delete", id);
    }
  }
};
</script>

<style scoped>
</style>