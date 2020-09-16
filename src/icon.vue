<template>
  <svg class="g-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'Icon',
    props: ['name'],
    mounted(){
      import("./svg.js").then(svg=>{})
    }
  }
</script>
<style lang="stylus" scoped>
  .g-icon 
    width: 1em; 
    height: 1em;
</style>