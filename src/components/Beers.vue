<template>
  <div id="beers">
    <div class="beers_header">
      <h3>Found: {{list.length}}</h3>
    </div>
    <beer v-for="item in list" :beer="item"></beer>
  </div>
</template>

<script>
import Beer from "./Beer.vue"
export default {
  name: 'beers',
  components: {
    Beer,
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

<style>
</style>
