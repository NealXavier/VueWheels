<!--  -->
<template>
  <div class="tab-nav" ref="nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper"> 
      <slot name="actions" class="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabNav",
  props:{
    selected:{
      type:String,
    }
  },
  data() {
    return { 
    }
  },
  inject:["eventBus"],
  created() {
  },
  mounted() {
    this.eventBus.$on("update:selected",(selected,vm)=>{
      this.updateLinePosition(vm)
    })
  },
  methods:{
    updateLinePosition(vm){
      let {width, left} = vm.$el.getBoundingClientRect()
      let {left: left2} = this.$refs.nav.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.transform = `translateX(${left - left2}px)`
    }
  }
};
</script>
<style lang="stylus" scoped>
  $tab-height = 40px
  $border-color= #ddd
  .tab-nav
    height $tab-height 
    display flex
    align-items center
    justify-content flex-start
    position relative
    border-bottom 1px solid $border-color
    cursor: pointer
    & > .line
      position: absolute
      bottom: 0
      border-bottom: 1px solid #00a1d6
      transition all 250ms
    & > .actions-wrapper
      margin-left auto
      padding-right 2em
</style>