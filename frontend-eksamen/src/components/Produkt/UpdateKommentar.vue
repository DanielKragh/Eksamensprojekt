<template>
  <v-dialog v-model="dialog" max-width="600px" persistent transition>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-card-title>
              <span class="headline">Ret</span>
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
                  v-model="data.kommentaren"
                  :rules="[rules.required]"
                  hide-details
                  label="Kommentaren"
                ></v-text-field>
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
                @click="update"
              >Ret</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "UpdateKommentar",
  props: {
    dialog: Boolean,
    data: Object
  },
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || "This field is required."
      },
    };
  },
  methods: {
    update() {
      this.log(this.data);
      this.$emit("update", this.data);
      this.$emit("close");
    }
  },
  mounted() {
  },
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>