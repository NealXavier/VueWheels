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
  computed:{
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
        let names = this.getAllNames()
        this.$children.forEach(vm=>{
        vm.selected = selected

        let lastIdx = names.indexOf(vm.name)
        let curIdx = names.indexOf(selected)
        vm.reverse = (curIdx ===  lastIdx) ? true:false
      })
    },
    playAuto(delay = 3000){
      let names = this.getAllNames()
      let selectName = this.selectedName()
      let idx = names.indexOf(selectName)
      const run = ()=>{
        // if(idx === names.length) idx = 0
        if(idx === -1){idx = names.length - 1} 
        this.$emit("update:selected",names[idx])
        // idx++
        idx--
        setTimeout(run, delay)
      }
      setTimeout(run, delay)
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
    width 200px
    &-window
      overflow hidden
    &-wrapper
      display flex
      position relative
</style>