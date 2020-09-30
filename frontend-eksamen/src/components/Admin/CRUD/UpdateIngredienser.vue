<template>
  <v-dialog v-model="dialog" max-width="600px" persistent transition>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-card-title>
              <span class="headline">Ingredienser</span>
            </v-card-title>

            <CRUDTable
              :headers="headers"
              :items="data.ingredienser"
              @create="createDialog = true"
              @delete="deleteItem"
            />
            <CreateIngrediens
              :dialog="createDialog"
              @close="createDialog = false"
              v-if="createDialog"
              @create="opret"
            />

            <v-card-actions>
              <v-btn
                class="send-btn white--text"
                color="rgb(104, 138, 163)"
                depressed
                tile
                width="100%"
                @click="$emit('close');"
              >Luk</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import CRUDTable from "./CRUDTable";
import CreateIngrediens from "./CreateIngrediens";
export default {
  name: "UpdateProdukt",
  components: {
    CRUDTable,
    CreateIngrediens
  },
  props: {
    dialog: Boolean,
    data: Object
  },
  data() {
    return {
      createDialog: false,
      valid: false,
      rules: {
        required: value => !!value || "This field is required."
      },
      image: undefined,
      kategorier: undefined,
      headers: [
        { text: "Titel", value: "ingrediens_titel" },
        { text: "Mængde", value: "maengde" },
        { text: "Forkortet enhed", value: "enhed_forkortet" },
        { text: "Enhed fulde navn", value: "enhed_navn" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          width: "10rem",
          align: "center"
        }
      ]
    };
  },
  methods: {
    reload() {
      this.model.getProduktFraId(this.data._id).then(res => {
        this.data = res.data;
        this.log(res.data);
      });
    },
    deleteItem(id) {
      this.model.deleteIngredienser(this.data._id,id).then(() => {
        this.reload();
      });
    },
    opret(e) {
      this.log(e);

      this.model
        .postIngredienser(this.data._id, e)
        .then(res => {
          this.log(res.data);
          this.reload();
        })
        .catch(err => this.log(err));
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>