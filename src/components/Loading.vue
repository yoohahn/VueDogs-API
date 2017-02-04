<template>
  <div class="loading">
    Searching <span class="loading_dots">{{dots}}</span>
  </div>
</template>

<script>
export default {
  name: 'loading',
  beforeDestroy: function() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  mounted: function () {
    let counter = 1;
    const t = this;
    function timerFunc() {
      t.timer = setTimeout(()=>{
        counter++;
        if(counter >= 5) {
          counter = 1;
        }
        t.dots = new Array(counter).join(".");
        timerFunc();
      }, 350);
    };
    timerFunc();
  },
  data () {
    return {
      dots: ".",
      timer: null
    }
  }
}
</script>

<style lang="cssnext">
.loading {
  position: relative;
  font-size: 2em;
  text-align: center;
  margin-top: 50px;
}
.loading_dots {
  position: absolute;
  min-width: 50px;
  text-align: left;
  padding-left: 10px;
}
</style>
