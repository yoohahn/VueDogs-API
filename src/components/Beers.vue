<template>
  <div id="beers">
    <div class="beers_header">
      <h3>Matches: {{list.length}}</h3>
    </div>
    <beer v-if="list.length === 1" :beer="list[0]"></beer>
    <beer-simple v-if="list.length > 1" v-for="beer in list" :beer="beer"></beer-simple>
  </div>
</template>

<script>
import Beer from "./Beer/Beer.vue";
import BeerSimple from "./BeerSimple.vue";

export default {
  name: 'beers',
  components: {
    Beer,
    BeerSimple,
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="cssnext">
.beers_header {
  margin-top: 10px;
}
</style>
