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
      default:false
    },
    selected:{
      type:Array,
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected)
    
    this.eventBus.$on('update:selected',(selected)=>{
      // update app.js data
      this.$emit('update:selected',selected)
    })

    this.eventBus.$on('update:removeSelected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        //  update x-acdItem dom
        this.eventBus.$emit('update:selected', selectedCopy)
    })
    this.eventBus.$on('update:addSelected',(name)=>{
      let selectCopy = JSON.parse(JSON.stringify(this.selected))
      // single option
      if(this.single){
        selectCopy = [name]
      }else{
        selectCopy.push(name)
      }
      this.eventBus.$emit('update:selected',selectCopy)
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