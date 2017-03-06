<template>
  <div id="main">
    Beer id:
    <input class="filter-list__input" disabled="disabled" v-model="activeId"/>
    Abbreviation less than:
    <input class="filter-list__input" v-model="abv_lt" placeholder="Abbreviation less than"/>
    Abbreviation greater than:
    <input class="filter-list__input" v-model="abv_gt" placeholder="Abbreviation greater than"/>
    Name of the beer:
    <input class="filter-list__input" v-model="beer_name" placeholder="Name of the beer"/>
    Hops:
    <input class="filter-list__input" v-model="hops" placeholder="Name of the hops"/>
    Malt:
    <input class="filter-list__input" v-model="malt" placeholder="Name of the malt"/>
    Yeast:
    <input class="filter-list__input" v-model="yeast" placeholder="Name of the yeast"/>
  </div>
</template>

<script>
import api from "../../helpers/api";
import { mapGetters } from 'vuex';

let timer;
let halt = false;

export default {
  name: 'filter-list',
  computed: {
    ...mapGetters({
      activeId: 'activeId',
      showBeer: 'showBeer'
    }),
  },
  watch: {
    showBeer: function _showBeerFromStore() {
      this.getBeerList( this.activeId );
    },
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
    compileFilter: function( id ) {
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
      if(id) {
        arr.push(`${api.params.IDS}=${id}`)
      }
      return arr.join("&");
    },
    calcUrl: function _calc( id ) {
      return `${api.url}&${this.compileFilter( id )}`;
    },
    getBeerList: function _getBeerList( id ) {
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(() => {
        if(this.calcUrl() === api.url){
          this.$store.dispatch('setLoadingState', false);
          return;
        }

        this.$store.dispatch('setLoadingState', true);
        if(!id) {
          this.$store.dispatch('setActiveId', null);
        }

        api.fetch(this.calcUrl( id ))
          .then(beerList => {
            if(beerList.length === 1 && !id) {
              this.$store.dispatch('setActiveId', beerList[0].id);
            }
            this.$store.dispatch('addResult', beerList);
            this.$store.dispatch('setLoadingState', false);
          });
      }, 500);
    },
  },
  data() {
      return {
        abv_gt: "",
        abv_lt: "",
        beer_name: "",
        hops: "",
        malt: "",
        yeast: "",
      };
  }
}
</script>

<style scoped>
.filter-list__input {
  width: 100%;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
}
</style>
