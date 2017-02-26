<template>
  <div class="info-bullet">
    <span class="info-bullet__bold info-bullet__indented" v-if="text.key">{{text.key}}: </span>
    <span class="info-bullet__text">{{text.value}}</span>
  </div>
</template>

<script>
export default {
  name: 'info-bullet',
  props: {
    text: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.info-bullet__bold {
  font-weight: bold;
}
.info-bullet__indented {
  margin-left: 10px;
}
</style>
