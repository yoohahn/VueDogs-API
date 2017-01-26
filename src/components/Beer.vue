<template>
  <div class="beer">
      <h1>{{beer.name}}</h1>
      <img :src="beer.image_url" height="250px"/>
      <h3>Description:</h3>
      <div class="beer_description">
        {{beer.description}}
      </div>
      <div>
        <span class="beer_bold beer_indented_normal">Abv: </span><span>{{beer.abv}}%</span>
      </div>
      <div>
        <span class="beer_bold beer_indented_normal">OG: </span><span>{{beer.target_og}}</span>
      </div>
      <div>
        <span class="beer_bold beer_indented_normal">FG: </span><span>{{beer.target_fg}}</span>
      </div>

      <div class="how_to__brew">
        <h2>How to brew this beer</h2>
        <div>
          <span class="beer_bold beer_indented_normal">Boil Volume: </span><span>{{beer.boil_volume.value}} {{beer.boil_volume.unit}}</span>
        </div>
        <div>
          <span class="beer_bold beer_indented_normal">Final Volume: </span><span>{{beer.volume.value}} {{beer.volume.unit}}</span>
        </div>
        <div class="how_to__mash_ferment">
          <h3>Mashing</h3>
          <div class="beer_indented_normal" v-for="(step, index) in beer.method.mash_temp">
            <span class="beer_bold">{{index + 1}}:</span> {{step.temp.value}} {{step.temp.unit}} for {{step.duration || "???"}} minutes
          </div>

          <h3>Fermentation</h3>
          <div class="beer_indented_normal">
            {{beer.method.fermentation.temp.value || "???"}} {{beer.method.fermentation.temp.unit}}</span>
          </div>

          <div v-if="beer.method.twist">
            <h3>Twist</h3>
            <span>{{beer.method.twist}}</span>
          </div>
        </div>
        <div class="how_to__ingredients">
          <h2>Ingredients</h2>
          <div class="how_to__ingredients-malt">
            <h3>Malt</h3>
            <div class="beer_indented_normal" v-for="(malt, index) in beer.ingredients.malt">
              <span class="beer_bold">{{index + 1}}: </span>
              {{malt.name}} {{malt.amount.value}} {{malt.amount.unit}}
            </div>
          </div>
          <div class="how_to__ingredients-hops">
            <h3>Hops</h3>
            <div class="beer_indented_normal" v-for="(hop, index) in beer.ingredients.hops">
              <span class="beer_bold">{{index + 1}}: </span>
              {{hop.name}} {{hop.amount.value}} {{hop.amount.unit}} add at {{hop.add}} (Attribute: {{hop.attribute}})
            </div>
          </div>
          <div class="how_to__ingredients-yeast">
            <h3>Yeast</h3>
            <span class="beer_indented_normal">
              {{beer.ingredients.yeast}}
            </span>
          </div>
        </div>

        <div v-if="beer.brewers_tips">
          <h2>Tip</h2>
          <span>{{beer.brewers_tips}}</span>
        </div>
      </div>

      <div>
        <h2>Food Pairing</h2>
        <div class="beer_indented_normal" v-for="(dish, index) in beer.food_pairing">
          <span class="beer_bold">{{index + 1}}: </span> {{dish}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'beer',
  props: {
    beer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.beer {
  padding: 10px;
  border-bottom: 1px dashed black;
}
.beer_description {
  margin-bottom: 15px;
}
.beer_bold {
  font-weight: bold;
}
.beer_indented_normal {
  margin-left: 10px;
}
</style>
