<template>
  <div>
    <div class="flex-p top">
      <div class="id">
        Beer id: {{activeId || '-'}}
      </div>
      <button v-on:click="clearAll">Clear Filters</button>
    </div>

    <div class="flex-p">
      <div class="flex-c">
        Abbreviation greater than:
        <input class="input" v-model="abv_gt" placeholder="Abbreviation greater than"/>
      </div>
      <div class="flex-c">
        Abbreviation less than:
        <input class="input" v-model="abv_lt" placeholder="Abbreviation less than"/>
      </div>
    </div>

    <div class="flex-p">
      <div class="flex-c">
        Name of the beer:
        <input class="input" v-model="beer_name" placeholder="Name of the beer"/>
      </div>
      <div class="flex-c">
        Hops:
        <input class="input" v-model="hops" placeholder="Name of the hops"/>
      </div>
    </div>

    <div class="flex-p">
      <div class="flex-c">
        Malt:
        <input class="input" v-model="malt" placeholder="Name of the malt"/>
      </div>
      <div class="flex-c">
        Yeast:
        <input class="input" v-model="yeast" placeholder="Name of the yeast"/>
      </div>
    </div>
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
      this.getBeerList( {
        id: this.activeId
      } );
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
    clearAll: function _clearAll(){
      halt = true;
      this.abv_gt = "";
      this.abv_lt = "";
      this.beer_name = "";
      this.hops = "";
      this.malt = "";
      this.yeast = "";
      this.$store.dispatch('setActiveId', null);
      this.$store.dispatch('addResult', []);
    },
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
    getBeerList: function _getBeerList( obj = {} ) {
      const { id } = obj;
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(() => {
        if(halt) {
          halt = false;
          return;
        }
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
.id {
  flex: 1 1 100%;
}
.flex-p.top {
  margin: 0;
  align-items: center;
}
button {
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 3px 6px;
  background-color: #FFF;
  flex: 0 0 120px;
}
.input {
  width: 100%;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
}
.flex-p {
  display: flex;
  margin: 10px 0;
}
.flex-c {
  flex: 0 0 50%;
  box-sizing: border-box;
}
</style>
