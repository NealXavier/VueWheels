<!--  -->
<template>
  <div class="slides">
    <div class="slides-window" 
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave">
      <div class="slides-wrapper">
        <slot></slot>
      </div>
      <div class="slides-dots">
        <span @click="select(n-1)"
          :class="{active:curIdx === n-1}"
          v-for="n in childLen" 
          :key="n-1">{{n}}</span>
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
    },
  },
  computed:{
  },
  data() {
    return {
      childLen:0,
      lastIdx:this.selected,
      curIdx:undefined,
      isActive:false,
      names:undefined,
      timer:undefined
    };
  },
  methods: {
    // which chosen
    select(index){
      // forward
      if(index === this.names.length){
        index = 0 
      }
      // reverse
      if(index === -1){
        index = this.names.length - 1
      }
      // lastIdx 
      this.lastIdx = this.names.indexOf(this.selectedName())
      this.curIdx = index
      this.$emit("update:selected",this.names[index])
    },
    getAllNames(){
      return this.$children.map(vm=>vm.name)  
    },
    selectedName(){
      return this.selected || this.$children[0].name
    },
    // swiper children
    updateChildren(selected){
      let names = this.getAllNames()
      this.$children.forEach(vm=>{
        vm.reverse = this.curIdx > this.lastIdx ? false:true
        // forward direction reset
        if(this.curIdx === 0 && this.lastIdx === names.length - 1){
          vm.reverse = false
        }
        // reverse direction reset
        if(this.curIdx === names.length - 1 && this.lastIdx === 0){
          vm.reverse = true
        }
        this.$nextTick(()=>{
          vm.selected = selected
        })
      })
    },
    playAuto(delay = 2000){
      if(this.timer) reteurn
      const run = ()=>{
        let idx = this.names.indexOf(this.selectedName())
        // how the direction
        idx++
        this.select(idx)
        this.timer = setTimeout(run, delay)
      }
      run()
    },
    onMouseEnter(){
      this.pause()
    },
    pause(){
      clearTimeout(this.timer)
      this.timer = undefined
    },
    onMouseLeave(){
      this.playAuto()
    }
  },
  created() {},
  mounted() {
    this.names = this.getAllNames()
    let selected = this.selectedName()
    this.select(this.names.indexOf(selected))

    if(this.autoplay){
      this.playAuto()
    }
    this.childLen = this.$children.length
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
    &-dots
      span.active
        background red
</style>