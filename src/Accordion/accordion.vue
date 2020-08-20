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
      eventBus:new Vue(),
    }
  },
  props:{
    single:{
      type:Boolean,
      required:false,
      default:false
    },
    selected:{
      type:String
    }
  },
  provide(){
    if(this.single){
      return {
        eventBus:this.eventBus
      }
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected)
    this.eventBus.$on('update:selected',(selected)=>{
      this.$emit('update:selected',selected)
    })
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