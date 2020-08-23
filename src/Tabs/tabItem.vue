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
    },
    disabled:{
      type:Boolean,
      default:false
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
        active:this.isActive,
        disabled:this.disabled
      }
    }
  },
  inject:["eventBus"],
  created() {
    this.eventBus.$on("update:selected",(selected,vm,direction)=>{
      this.isActive = this.name === selected
    })
  },
  mounted() {
  },
  methods:{
    handleClick(){
      if(this.disabled)return
      this.eventBus.$emit("trigger:selected",this.name)
    }
  }
};
</script>
<style scoped lang="stylus">
  $disabledColor = grey
  .tab-item
    flex-shrink 0
    padding 0 1em
    height 100%
    display flex
    align-items center
    position relative
    &.disabled
      color $disabledColor
      cursor not-allowed
    &.active
      color #00a1d6
</style>