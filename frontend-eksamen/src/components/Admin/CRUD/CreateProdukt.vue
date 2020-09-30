<template>
  <v-dialog v-model="dialog" max-width="600px" persistent transition>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-card-title>
              <span class="headline">Opret</span>
            </v-card-title>

            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-model="data.titel"
                  :rules="[rules.required]"
                  hide-details
                  label="Titel"
                ></v-text-field>
                <v-text-field
                  v-model="data.teaser"
                  :rules="[rules.required]"
                  hide-details
                  label="Teaser"
                ></v-text-field>
                <v-text-field
                  v-model="data.beskrivelse"
                  :rules="[rules.required]"
                  hide-details
                  label="Beskrivesle"
                ></v-text-field>
                <v-text-field
                  v-model="data.antal"
                  :rules="[rules.required]"
                  hide-details
                  type="number"
                  label="Antal"
                ></v-text-field>
                <v-text-field
                  v-model="data.pris"
                  :rules="[rules.required]"
                  hide-details
                  type="number"
                  label="Pris"
                ></v-text-field>
                <v-file-input
                  v-model="data.image"
                  :rules="[rules.required]"
                  accept="image/png, image/jpeg, image/bmp"
                  hide-details
                  label="Billede"
                  prepend-icon="mdi-camera"
                ></v-file-input>
                <v-text-field
                  v-model="data.tilberedningstid"
                  :rules="[rules.required]"
                  hide-details
                  type="number"
                  label="Tilberedningstid"
                ></v-text-field>
                <v-select
                  v-model="data.kategori"
                  :items="kategorier"
                  :rules="[rules.required]"
                  hide-details
                  item-text="titel"
                  item-value="_id"
                  label="Kategori"
                ></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="send-btn white--text"
                color="rgb(104, 138, 163)"
                depressed
                tile
                width="50%"
                @click="$emit('close');"
              >Luk</v-btn>
              <v-btn
                :disabled="!valid"
                class="send-btn white--text"
                color="rgb(104, 138, 163)"
                depressed
                tile
                width="50%"
                @click="create"
              >Opret</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateProdukt",
  props: {
    dialog: Boolean
  },
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || "This field is required."
      },

      data: {
        titel: undefined,
        teaser: undefined,
        beskrivesle: undefined,
        tilberedningstid: undefined,
        antal: undefined,
        pris: undefined,
        kategori: undefined,

        image: undefined
      },

      kategorier: undefined
    };
  },
  methods: {
    create() {
      this.log(this.data);
      this.$emit("create", this.data);
      this.$emit("close");
    }
  },
  mounted() {
    this.model.getAlleKategorier().then(res => {
      this.kategorier = res.data;
    });
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>