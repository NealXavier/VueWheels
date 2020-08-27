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
    },
    autoplay:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getAllNames(){
      return this.$children.map(vm=>vm.name)  
    },
    selectedName(){
      return this.selected || this.$children[0].name
    },
    updateChildren(selected){
        this.$children.forEach(vm=>{
        vm.selected = selected
      })
    },
    playAuto(delay = 1000){
      let names = this.getAllNames()
      let selectName = this.selectedName()
      let idx = names.indexOf(selectName)
      const run = ()=>{
        if(idx === names.length) idx = 0
        this.$emit("update:selected",names[idx])
        idx++
        setTimeout(run, delay);
      }
      setTimeout(run, delay);
    }
  },
  created() {},
  mounted() {
    let selected = this.selectedName()
    this.updateChildren(selected)

    if(this.autoplay){
      this.playAuto()
    }
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
    &-wrapper
      display flex
      position relative
</style>