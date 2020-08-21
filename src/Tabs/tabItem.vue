<template>
  <div class="tab-item" :class="classes" @click="handleClick">
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
    }
  },
  computed:{
    classes(){
      return {
        active:this.isActive
      }
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
  methods:{
    handleClick(){
      this.eventBus.$emit("trigger:selected",this.name)
    }
  }
};
</script>
<style scoped lang="stylus">
  .tab-item
    flex-shrink 0
    padding 0 1em
    &.active
      background red
</style>