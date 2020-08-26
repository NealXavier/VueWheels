<!--  -->
<template>
  <div class="slides">
    <div class="slides-window">
      <div class="slides-wrapper">
        <slot></slot>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name:'sliders',
  props: {
    selected:{
      type:String
    }
  },
  data() {
    return {
    };
  },
  methods: {
    selectedName(){
      return this.selected || this.$children[0].name
    },
    updateChildren(selected){
        this.$children.forEach(vm=>{
        vm.selected = selected
      })
    }
  },
  created() {},
  mounted() {
    let selected = this.selectedName()
    this.updateChildren(selected)
  },
  updated(){
    let selected = this.selectedName()
    this.updateChildren(selected)
  }
};
</script>
<style scoped lang='stylus'>
  .slides
    border 1px solid red
    &-window
      overflow hidden
      width 100px
      height 100px
    &-wrapper
      display flex
      position relative
</style>