<template>
  <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="25" height="2.60869" :fill="fill"/>
    <rect y="9.19566" width="25" height="2.60869" :fill="fill"/>
    <rect y="17.8913" width="25" height="2.60869" :fill="fill"/>
  </svg>
</template>

<script lang="ts">
  export default {
    props: {
      fill: {
        type: String,
        default: '#2395FF'
      }
    }
  }
</script>

<style scoped lang="scss">

</style>