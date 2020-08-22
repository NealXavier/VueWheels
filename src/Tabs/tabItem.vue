<template>
  <div class="tab-item" 
       :class="classes" 
       @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabItem",
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
    this.eventBus.$on("update:selected",(selected,vm)=>{
      this.isActive = this.name === selected
    })
  },
  mounted() {
  },
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
    height 100%
    display flex
    align-items center
    position relative
    &.active
      color #00a1d6
</style>