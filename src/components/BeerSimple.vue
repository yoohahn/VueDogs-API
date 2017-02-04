<template>
  <div class="beer-simple">
    <div class="beer-simple_bg-img" :style="{ backgroundImage: 'url(' + beer.image_url + ')' }"></div>
    <div class="beer-simple_info">
      <h2 class="beer-simple_header" :title="beer.name">
        {{ beer.name }}
      </h2>
      <info-bullet v-for="info in getInfoBullets()" :text="info"/>
    </div>
  </div>
</template>

<script>
import InfoBullet from "./InfoBullet.vue";

export default {
  name: 'beer-simple',
  components: {
    InfoBullet,
  },
  methods: {
    getInfoBullets: function(){
      return [
        {key: 'Abv', value: this.beer.abv + '%'},
        {key: 'Og', value: this.beer.target_og},
        {key: 'Fg', value: this.beer.target_fg}
      ];
    }
  },
  props: {
    beer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="cssnext">
.beer-simple {
  position: relative;
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 5px;
  display: inline-block;
  width: 198px;
  height: 198px;
  margin: 10px 5px;
  overflow: hidden;
}
.beer-simple_bg-img {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: .2;
  margin: 5px;

  background-position-x: center;
  background-position-y: center;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-size: contain;
}

.beer-simple_info {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.beer-simple_header {
  margin-top: 5px;
  text-align: center;
  font-size: 1.3em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

</style>
