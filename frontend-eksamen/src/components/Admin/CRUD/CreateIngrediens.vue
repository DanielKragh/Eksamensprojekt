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
                  v-model="data.ingrediens_titel"
                  :rules="[rules.required]"
                  hide-details
                  label="Ingrediens navn"
                ></v-text-field>
                <v-text-field
                  v-model="data.maengde"
                  :rules="[rules.required]"
                  hide-details
                  type="number"
                  label="Mængde"
                ></v-text-field>
                <v-select
                  v-model="enhed"
                  :items="enheder"
                  :rules="[rules.required]"
                  hide-details
                  item-text="full"
                  item-value="data"
                  label="Enhed"
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
        ingrediens_titel: undefined,
        maengde: undefined,
        enhed_forkortet: undefined,
        enhed_navn: undefined
      },
      enhed: undefined,
      enheder: [
        { full: "Gram", data: { shortname: "g", full: "Gram" } },
        { full: "Teskefuld", data: { shortname: "tsk", full: "Teskefuld" } },
        { full: "Styk", data: { shortname: "stk", full: "Styk" } },
        { full: "Liter", data: { shortname: "L", full: "Liter" } },
        { full: "Deciliter", data: { shortname: "dl", full: "Deciliter" } },
        { full: "Håndfuld", data: { shortname: "håndfuld", full: "Håndfuld" } }
      ]
    };
  },
  methods: {
    create() {
      this.log(this.enhed);
      this.data.enhed_forkortet = this.enhed.shortname;
      this.data.enhed_navn = this.enhed.full;
      this.log(this.data);
      this.$emit("create", this.data);
      this.$emit("close");
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>