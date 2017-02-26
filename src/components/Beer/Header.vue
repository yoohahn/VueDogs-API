<template>
  <div class="beer_header">
    <div class="beer_header-img" :style="{backgroundImage: 'url(' + logo +')'}"></div>
    <div class="beer_header-container">
      <div class="beer_header-id">#{{id}}</div>
      <div class="beer_header-name">{{name}}</div>
      <div class="beer_header-date">First brewed {{convertDate()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'beer-header',
  methods: {
    convertDate: function () {
      const dateArr = this.date.split("/");
      const date = new Date(dateArr[1], (~~dateArr[0].replace("0", "") - 1).toString());
      const month = date.toLocaleString("en-us", { month: "long" });
      return `${month} ${dateArr[1]}`;
    }
  },
  props: {
    logo: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.beer_header {
  position: relative;
  height: 110px;
}
.beer_header-img {
  background-repeat: no-repeat;
  background-size: 90px;
  height: 110px;
  width: 110px;
  transform: rotate(350deg);
  display: inline-block;
  left: 10px;
  position: relative;
}
.beer_header-container {
  left: 100px;
  right: 0;
  top: 0;
  position: absolute;
}
.beer_header-id {
  font-weight: bold;
  font-size: 1.5em;
}
.beer_header-name {
  font-weight: 900;
  font-size: 2.5em;
}
.beer_header-date {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 1.3em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
}
</style>
