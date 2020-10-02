<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Produkter</h2>
      </v-col>
    </v-row>
    <CRUDTable
      :headers="headers"
      :items="items"
      @create="createDialog = true"
      @delete="deleteItem"
      @edit="editProdukt"
      @editIngredienser="editIngredienser"
    />
    <CreateProdukt
      :dialog="createDialog"
      @close="createDialog = false"
      v-if="createDialog"
      @create="opret"
    />
    <UpdateProdukt
      :dialog="updateDialog"
      @close="updateDialog = false"
      @update="edit"
      :data="data"
      v-if="updateDialog"
    />
      <UpdateIngredienser
      :dialog="updateIngDialog"
      @close="updateIngDialog = false"
      :data="data"
      v-if="updateIngDialog"
    />
  </v-container>
</template>

<script>
import CRUDTable from "@/components/Admin/CRUD/CRUDTable";
import CreateProdukt from "@/components/Admin/CRUD/CreateProdukt";
import UpdateProdukt from "@/components/Admin/CRUD/UpdateProdukt";
import UpdateIngredienser from "@/components/Admin/CRUD/UpdateIngredienser";

export default {
  name: "AdminProdukter",
  components: { CreateProdukt, CRUDTable, UpdateProdukt,UpdateIngredienser },
  data() {
    return {
      items: undefined,
      headers: [
        { text: "titel", value: "titel" },
        { text: "teaser", value: "teaser" },
        { text: "pris", value: "pris" },
        { text: "kategori", value: "kategori.titel" },
        { text: "billede", value: "image" },
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
      updateIngDialog: false,
      data: undefined
    };
  },
  methods: {
    deleteItem(id) {
      this.model.deleteProdukt(id).then(() => {
        this.hentAlleProdukter();
      });
    },
    hentAlleProdukter() {
      this.model.getAllProdukter().then(res => {
        this.log(res.data);
        this.items = res.data;
         this.items.map(i => {
          i.teaser = i.teaser.substring(0, 40)+ "..."
        })
      });
    },
    opret(e) {
      this.log(e);
      let formData = new FormData();
      formData.append("image", e.image);
      formData.append("titel", e.titel);
      formData.append("teaser", e.teaser);
      formData.append("beskrivelse", e.beskrivelse);
      formData.append("tilberedningstid", e.tilberedningstid);
      formData.append("pris", e.pris);
      formData.append("antal", e.antal);
      formData.append("kategori", e.kategori);

      this.model
        .postProdukt(formData)
        .then(res => {
          this.log(res.data);
          this.hentAlleProdukter();
        })
        .catch(err => this.log(err));
    },
    edit(e) {
      this.log(e);
      let formData = new FormData();

      formData.append("image", e.image);
      formData.append("titel", e.titel);
      formData.append("teaser", e.teaser);
      formData.append("beskrivelse", e.beskrivelse);
      formData.append("tilberedningstid", e.tilberedningstid);
      formData.append("pris", e.pris);
      formData.append("antal", e.antal);
      formData.append("kategori", e.kategori._id);
      this.model
        .putProdukt(e._id, formData)
        .then(res => {
          this.log(res.data);
          this.hentAlleProdukter();
        })
        .catch(err => this.log(err));
    },
   
    editProdukt(e) {
      this.model.getProduktFraId(e._id).then(res => {
        this.data = res.data;
        this.log(res.data);
        this.updateDialog = true;
      });
    },
    editIngredienser(e) {
      this.model.getProduktFraId(e._id).then(res => {
        this.data = res.data;
        this.log(res.data);

        this.updateIngDialog = true;
      });
    }
  },
  mounted() {
    this.hentAlleProdukter();
  }
};
</script>

<style scoped>
</style>