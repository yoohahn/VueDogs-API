<template>
  <div class="beer-tagline">
    <div class="beer-tagline__banner"></div>
    <div class="beer-tagline__info">
      <div class="beer-tagline__info-tagline">
        {{data.text}}
      </div>
      <div class="beer-tagline__info-section beer-tagline__info-section--abv">
        <span>ABV</span>
        <span>{{data.abv}}%</span>
      </div>
      <div class="beer-tagline__info-section beer-tagline__info-section--ibu">
        <span>IBU</span>
        <span>{{data.ibu}}</span>
      </div>
      <div class="beer-tagline__info-section beer-tagline__info-section--og">
        <span>OG</span>
        <span>{{data.og}}</span>
      </div>
    </div>
    <div class="beer-tagline__banner"></div>
  </div>
</template>

<script>
export default {
  name: 'beer-tagline',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="cssnext">
.beer-tagline {
  margin-top: 10px;
  margin-bottom: 10px;
}
.beer-tagline__banner {
  border: 3px solid rgba(0,0,0,1);
  border-radius: 2px;
}
.beer-tagline__info {
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
}
.beer-tagline__info-tagline {
  align-self: center;
  padding-left: 5px;
  flex: 1 1 100%;
  font-size: 1.3em;
}
.beer-tagline__info-section {
  display: flex;
  flex-direction: column;
  border-left: 4px solid rgba(0,0,0,1);
  padding: 0 20px;
  align-items: center;
}
</style>
