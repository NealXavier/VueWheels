<!--  -->
<template>
  <div class="tab-pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
    }
  },
  data() {
    return {
      isActive:false
    };
  },
  computed:{
    classes(){
      return {active:this.isActive}
    }
  },
  inject:["eventBus"],
  created() {
    this.eventBus.$on("update:selected",(selected)=>{
      if(this.name === selected){
        this.isActive = true
      }else{
        this.isActive = false
      }
    })
  },
  mounted() {},
};
</script>
<style lang="stylus" scoped>
  .tab-pane
    &.active
      background: red;
</style>