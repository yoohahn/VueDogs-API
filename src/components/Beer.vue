<template>
  <div class="beer">
    <beer-header :logo="logo" :id="beer.id" :name="beer.name" :date="beer.first_brewed"/>
    <beer-tagline :data="getTaglineData()" />
    <img :src="beer.image_url" height="250px"/>

    <div>
      <h2>Description</h2>
      <info-bullet v-for="(step, index) in beer.method.mash_temp" :text="{key: '', value: beer.description}"/>
    </div>

    <div>
      <h2>Basics</h2>
      <info-bullet v-for="info in getInfoBullets()" :text="info"/>
    </div>

    <div class="how_to__brew">
      <div>
        <h2>Method / Timing</h2>
        <h3>Mashing</h3>
        <info-bullet v-for="(step, index) in beer.method.mash_temp" :text="{key: index + 1, value: getMashValue(step)}"/>

        <h3>Fermentation</h3>
        <info-bullet :text="{key: '', value: getFermentationValue()}"/>

        <div v-if="beer.method.twist">
          <h3>Twist</h3>
          <info-bullet :text="{key: '', value: beer.method.twist}"/>
        </div>
      </div>

      <div>
        <h2>Ingredients</h2>

        <h3>Malt</h3>
        <info-bullet v-for="(malt, index) in beer.ingredients.malt" :text="{key: index + 1, value: getMaltValue(malt)}"/>

        <h3>Hops</h3>
        <info-bullet v-for="(hop, index) in beer.ingredients.hops" :text="{key: index + 1, value: getHopValue(hop)}"/>

        <h3>Yeast</h3>
        <info-bullet :text="{key: '', value: beer.ingredients.yeast}"/>
      </div>

      <div v-if="beer.brewers_tips">
        <h2>Tip</h2>
        <info-bullet :text="{key: '', value: beer.brewers_tips}"/>
      </div>
    </div>

    <h2>Food Pairing</h2>
    <info-bullet v-for="(dish, index) in beer.food_pairing" :text="{key: index + 1, value: dish}"/>
  </div>
</template>

<script>
import InfoBullet from "./InfoBullet.vue";
import BeerTagline from "./BeerTagline.vue";
import BeerHeader from "./BeerHeader.vue";
import logo from "../images/logo.gif";

export default {
  name: 'beer',
  components: {
    InfoBullet,
    BeerTagline,
    BeerHeader,
  },
  methods: {
    getTaglineData: function() {
      return {
        text: this.beer.tagline,
        abv: this.beer.abv,
        ibu: this.beer.ibu,
        og: this.beer.target_og
      }
    },
    getHopValue: function( hop ){
      return `${hop.name} ${hop.amount.value} ${hop.amount.unit} add at ${hop.add} (Attribute: ${hop.attribute})`;
    },
    getMaltValue: function( malt ){
      return `${malt.name} ${malt.amount.value} ${malt.amount.unit}`;
    },
    getFermentationValue: function () {
      return `${this.beer.method.fermentation.temp.value || "???"} ${this.beer.method.fermentation.temp.unit}`;
    },
    getMashValue: function ( step ) {
      return `${step.temp.value} ${step.temp.unit} for ${step.duration || "???"} minutes`;
    },
    getInfoBullets: function(){
      return [
        {key: 'Final Volume', value: `${this.beer.volume.value} ${this.beer.volume.unit}`},
        {key: 'Boil Volume', value: `${this.beer.boil_volume.value} ${this.beer.boil_volume.unit}`},
        {key: 'Abv', value: `${this.beer.abv}%`},
        {key: 'Target Fg', value: this.beer.target_fg},
        {key: 'Target Og', value: this.beer.target_og},
        {key: 'Ebc', value: this.beer.ebc},
        {key: 'Srm', value: this.beer.srm},
        {key: 'Ph', value: this.beer.ph},
        {key: 'Attenuation Lever', value: `${this.beer.attenuation_level}%`}
      ];
    }
  },
  props: {
    beer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      logo
    };
  }
}
</script>

<style>
.beer {
  padding: 10px;
}
</style>
