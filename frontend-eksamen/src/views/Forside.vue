<template>
  <div class="forside">
    <Slideshow />
    <NyestNyhederSektion v-if="alleNyheder"  class="my-10"/>
    <TilmeldNyhedsbrev class="my-10"/>
    <NyesteBagvark v-if="alleProdukter" class="mb-10"/>
  </div>
</template>

<script>
import Slideshow from "../components/Forside/Slideshow";
import NyestNyhederSektion from "../components/Forside/NyestNyhederSektion";
import TilmeldNyhedsbrev from "../components/Forside/TilmeldNyhedsbrev";
import NyesteBagvark from "../components/Forside/NyesteBagvark";
import { mapState } from "vuex";

export default {
  name: "Forside",
  components: {
    Slideshow,
    NyestNyhederSektion,
    TilmeldNyhedsbrev,
    NyesteBagvark
  },

  computed: {
    ...mapState({
      alleNyheder: state => state.BagerietData.alleNyheder,
      alleProdukter: state => state.BagerietData.alleProdukter,
    })
  }
};
</script>

<style lang="scss" scoped>
</style>

