<template>
  <!--
    TODO: Split into modules
    TODO: Expand filter function
    TODO: Nicer UI
  -->
  <div id="main">
    Abbreviation greater than:
    <input v-model="abv_gt" @keydown="abvValidate" placeholder="Abbreviation greater than"/>
    Name of the beer:
    <input v-model="beer_name" placeholder="Name of the beer"/>
    <beers :list="beerList" v-if="!beerList.error"></beers>
    <error :msg="beerList" v-if="beerList.error"></error>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import api from "./helpers/api";
import Beers from "./components/Beers.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";

let timer;

export default {
  name: 'app',
  components: {
    Beers,
    Loading,
    Error,
  },
  watch: {
    abv_gt: function _abv_gt() {
      this.getBeerList();
    },
    beer_name: function _beer_name() {
      this.getBeerList();
    }
  },
  methods: {
    getBeerList: function _getBeerList() {
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(() => {
        this.loading = true;
        this.beerList = [];

        if(this.calcUrl() === api.url){
          this.loading = false;
          return;
        }
        api.fetch(this.calcUrl())
          .then(beerList => {
            this.beerList = beerList;
            this.loading = false;
          });
      }, 500);
    },
    abvValidate: function _abvValidate(e) {
      // Will not work on Safari
      // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#Browser_compatibility
      const key = e.key.toLowerCase();
      if(!(/\d/.test(e.key) || key === "backspace" || key === "tab")) {
        e.preventDefault();
      }
    },
    calcUrl: function _calc() {
      const abv_gt = this.abv_gt.length > 0 ? `&${api.params.ABV_GREATER}=${this.abv_gt}` : "";
      const beer_name = this.beer_name.length > 0 ? `&${api.params.NAME}=${this.beer_name}` : "";
      return `${api.url}${abv_gt}${beer_name}`;
    }
  },
  data () {
    return {
      beerList: [],
      abv_gt: "",
      beer_name: "",
      loading: false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  top: 0;
  font-size: 1em;
}
h1 {
  font-size: 1.45em;
}
h2 {
  margin-top: 10px;
  font-size: 1.35em;
}
h3 {
  margin-top: 5px;
  font-size: 1.25em;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input {
  width: 100%;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  margin: 0px;
  padding: 5px;
  box-sizing: border-box;
}
#main {
  box-sizing: border-box;
  padding: 10px;
}
</style>
