<template>
  <div class="beer_infobox">
    <h2 class="beer_infobox-title">{{title}}</h2>
    <div class="beer_infobox-slot">
      <slot>
        MISSING SLOT INFO!
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'beer-infobox',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.beer_infobox-title {
  margin: 10px 0 0 0;
  padding: 0;
}
.beer_infobox-slot {
  border-top: 3px solid #000;
  background: rgba(0,0,0,.1);
  padding: 10px;
}
</style>
