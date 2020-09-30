<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Nyheder</h2>
      </v-col>
    </v-row>
    <CRUDTable
      :headers="headers"
      :items="items"
      @create="createDialog = true"
      @delete="deleteItem"
      @edit="editEvent"
    />
    <CreateNyhed
      :dialog="createDialog"
      @close="createDialog = false"
      v-if="createDialog"
      @create="opret"
    />
    <UpdateNyhed
      :dialog="updateDialog"
      @close="updateDialog = false"
      @update="edit"
      :data="data"
      v-if="updateDialog"
    />
  </v-container>
</template>

<script>
import CRUDTable from "@/components/Admin/CRUD/CRUDTable";
import CreateNyhed from "@/components/Admin/CRUD/CreateNyhed";
import UpdateNyhed from "@/components/Admin/CRUD/UpdateNyhed";

export default {
  name: "AdminBestyrelse",
  components: { CreateNyhed, CRUDTable, UpdateNyhed },
  data() {
    return {
      items: undefined,
      headers: [
        { text: "Titel", value: "titel" },
        { text: "Teaser", value: "teaser" },
        { text: "Nyhedstekst", value: "nyhedstekst" },
        { text: "Billede", value: "image" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          width: "10rem",
          align: "center"
        }
      ],
      createDialog: false,
      updateDialog: false,
      data: undefined
    };
  },
  methods: {
    deleteItem(id) {
      this.model.deleteNyhed(id).then(() => {
        this.hentAlleNyheder();
      });
    },
    hentAlleNyheder() {
      this.model.getAllNyheder().then(res => {
        this.log(res.data);
        this.items = res.data;
      });
    },
    opret(e) {
      this.log(e);
      let formData = new FormData();

      formData.append("image", e.image);
      formData.append("titel", e.titel);
      formData.append("teaser", e.teaser);
      formData.append("nyhedstekst", e.nyhedstekst);
      this.model
        .postNyhed(formData)
        .then(res => {
          this.log(res.data);
          this.hentAlleNyheder();
        })
        .catch(err => this.log(err));
    },
    edit(e) {
      this.log(e);
      let formData = new FormData();

      formData.append("image", e.image);
      formData.append("titel", e.titel);
      formData.append("teaser", e.teaser);
      formData.append("nyhedstekst", e.nyhedstekst);

      this.model
        .putNyhed(e._id, formData)
        .then(res => {
          this.log(res.data);
          this.hentAlleNyheder();
        })
        .catch(err => this.log(err));
    },
    editEvent(e) {
      this.data = e;
      this.log(e);
      this.updateDialog = true;
    }
  },
  mounted() {
    this.hentAlleNyheder();
  }
};
</script>

<style scoped>
</style>