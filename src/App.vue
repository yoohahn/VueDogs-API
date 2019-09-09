<template>
  <div id="main">
    <filter-list></filter-list>
    <beers :list="beerList" v-if="!beerList.error"></beers>
    <error :msg="beerList" v-if="beerList.error"></error>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import FilterList from "./components/Filter/List.vue";
import Beers from "./components/Beers.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters({
      loading: "loading",
      beerList: "beerList"
    })
  },
  components: {
    Beers,
    Loading,
    Error,
    FilterList
  }
};
</script>

<style scoped>
#main {
  box-sizing: border-box;
  padding: 10px;
}
</style>
