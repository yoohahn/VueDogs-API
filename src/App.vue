<template>
  <div id="main">
    Abbreviation less than:
    <input class="main-input" v-model="abv_lt" @keydown="abvValidate" placeholder="Abbreviation less than"/>
    Abbreviation greater than:
    <input class="main-input" v-model="abv_gt" @keydown="abvValidate" placeholder="Abbreviation greater than"/>
    Name of the beer:
    <input class="main-input" v-model="beer_name" placeholder="Name of the beer"/>
    Hops:
    <input class="main-input" v-model="hops" placeholder="Name of the hops"/>
    Malt:
    <input class="main-input" v-model="malt" placeholder="Name of the malt"/>
    Yeast:
    <input class="main-input" v-model="yeast" placeholder="Name of the yeast"/>
    <beers :list="beerList" v-if="!beerList.error"></beers>
    <error :msg="beerList" v-if="beerList.error"></error>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import apiProd from "./helpers/api";
import Beers from "./components/Beers.vue";
import Loading from "./components/Loading.vue";
import Error from "./components/Error.vue";

let apiDev;
let timer;

const api = apiDev ? apiDev : apiProd;

export default {
  name: 'app',
  components: {
    Beers,
    Loading,
    Error,
  },
  watch: {
    abv_lt: function _abv_lt() {
      this.getBeerList();
    },
    abv_gt: function _abv_gt() {
      this.getBeerList();
    },
    beer_name: function _beer_name() {
      this.getBeerList();
    },
    hops: function _hops() {
      this.getBeerList();
    },
    malt: function _malt() {
      this.getBeerList();
    },
    yeast: function _yeast() {
      this.getBeerList();
    }
  },
  methods: {
    compileFilter: function() {
      const arr = [];
      if(this.abv_gt) {
        arr.push(`${api.params.ABV_GREATER}=${this.abv_gt}`)
      }
      if(this.abv_lt) {
        arr.push(`${api.params.ABV_LESS}=${this.abv_lt}`)
      }
      if(this.beer_name) {
        arr.push(`${api.params.NAME}=${this.beer_name}`)
      }
      if(this.hops) {
        arr.push(`${api.params.HOPS}=${this.hops}`)
      }
      if(this.malt) {
        arr.push(`${api.params.MALT}=${this.malt}`)
      }
      if(this.yeast) {
        arr.push(`${api.params.YEAST}=${this.yeast}`)
      }
      return arr.join("&");
    },
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
      return `${api.url}&${this.compileFilter()}`;
    }
  },
  data () {
    return {
      beerList: [],
      abv_gt: "",
      abv_lt: "",
      beer_name: "",
      hops: "",
      malt: "",
      yeast: "",
      loading: false
    }
  }
}
</script>

<style scoped>
.main-input {
  width: 100%;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
}
#main {
  box-sizing: border-box;
  padding: 10px;
}
</style>
