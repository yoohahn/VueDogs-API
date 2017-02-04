<template>
  <div class="beer">
    <beer-header :logo="logo" :id="beer.id" :name="beer.name" :date="beer.first_brewed"/>
    <beer-tagline :data="getTaglineData()" />
    <div class="beer-content">
      <beer-infobox class="beer_infobox--content" id="beer-content-description" title="This Beer Is">
        {{beer.description}}
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-ingredients" title="Ingredients">
        <h3>Malt</h3>
        <info-bullet v-for="(malt, index) in beer.ingredients.malt" :text="{key: index + 1, value: getMaltValue(malt)}"/>

        <h3>Hops</h3>
        <info-bullet v-for="(hop, index) in beer.ingredients.hops" :text="{key: index + 1, value: getHopValue(hop)}"/>

        <h3>Yeast</h3>
        <info-bullet :text="{key: '', value: beer.ingredients.yeast}"/>
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-packaging" title="Packaging">
        <img class="beer-content-packaging--img" :src="beer.image_url"/>
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-basic" title="Basics">
        <info-bullet v-for="info in getInfoBullets()" :text="info"/>
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-method" title="Method / Timing">
        <h3>Mashing</h3>
        <info-bullet v-for="(step, index) in beer.method.mash_temp" :text="{key: index + 1, value: getMashValue(step)}"/>

        <h3>Fermentation</h3>
        <info-bullet :text="{key: '', value: getFermentationValue()}"/>

        <div v-if="beer.method.twist">
          <h3>Twist</h3>
          <info-bullet :text="{key: '', value: beer.method.twist}"/>
        </div>
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-foodpairing" title="Food Pairing">
        <info-bullet v-for="(dish, index) in beer.food_pairing" :text="{key: index + 1, value: dish}"/>
      </beer-infobox>

      <beer-infobox class="beer_infobox--content" id="beer-content-tip" title="Brewer's Tip" v-if="beer.brewers_tips">
        {{beer.brewers_tips}}
      </beer-infobox>
    </div>
  </div>
</template>

<script>
import logo from "../../images/logo.gif";
import InfoBullet from "../InfoBullet.vue";

import BeerTagline from "./Tagline.vue";
import BeerHeader from "./Header.vue";
import BeerInfobox from "./InfoBox.vue";

export default {
  name: 'beer',
  components: {
    InfoBullet,
    BeerTagline,
    BeerHeader,
    BeerInfobox,
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

<style lang="cssnext">
.beer {
  padding: 10px;
}

/*Beer packaging image overrides*/
#beer-content-packaging .beer_infobox-slot {
  text-align: center;
}
.beer-content-packaging--img {
  height: 400px;
}
.beer-content {
  display: flex;
  flex-wrap: wrap;
}
.beer_infobox--content {
  display: inline-block;
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  width: calc(33% - 20px);
}

@media screen and (max-width: 950px) {
  #beer-content-description {
    order: 1;
  }
  #beer-content-packaging {
    order: 2;
  }
  .beer_infobox--content {
    order: 3;
    width: calc(50% - 20px);
  }
}
@media screen and (max-width: 650px) {
  #beer-content-description {
    order: 2;
  }
  #beer-content-packaging {
    order: 1;
  }
  .beer_infobox--content {
    order: 3;
    width: calc(100% - 20px);
  }
}
</style>
