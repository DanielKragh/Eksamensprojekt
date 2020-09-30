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
                  v-model="data.teaser"
                  :rules="[rules.required]"
                  hide-details
                  label="Teaser"
                ></v-text-field>
                <v-text-field
                  v-model="data.nyhedstekst"
                  :rules="[rules.required]"
                  hide-details
                  label="NyhedsTekst"
                ></v-text-field>
        
                <v-file-input
                  v-model="image"
                  accept="image/png, image/jpeg, image/bmp"
                  hide-details
                  label="Billede"
                  prepend-icon="mdi-camera"
                ></v-file-input>
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
  name: "UpdateProdukt",
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
      image: undefined,
    };
  },
  methods: {
    update() {
      this.log(this.image);
      if (this.image === undefined) {
        this.data.image = undefined;
      } else {
        this.data.image = this.image;
      }

      this.log(this.data);
      this.$emit("update", this.data);
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