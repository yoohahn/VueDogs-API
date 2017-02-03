<template>
  <div class="error">
    <h2>{{msg.error}}</h2>
    <span>{{msg.message}}</span>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    msg: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.error {
  position: relative;
  font-size: 1.2em;
  text-align: center;
  margin-top: 50px;
}
</style>
