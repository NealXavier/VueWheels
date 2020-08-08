<template>
  <div>
    <div class="collapse">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'Accordion',
  data(){
    return {
      eventBus:new Vue()
    }
  },
  props:{
    single:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  provide(){
    if(this.single){
      return {
        eventBus:this.eventBus
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  $grey = #ddd
  $border-radius = 4px
  .collapse
    border: 1px solid $grey;
    border-radius: $border-radius;
</style>


