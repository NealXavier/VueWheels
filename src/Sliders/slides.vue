<!--  -->
<template>
  <div class="slides">
    <div class="slides-window">
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
      isActive:false
    };
  },
  methods: {
    // which chosen
    select(index){
      let names = this.getAllNames()
      // if(index === names.length) index = 0
      // if(index === -1) index = names.length - 1
      this.lastIdx = names.indexOf(this.selectedName())
      this.curIdx = index
      this.$emit("update:selected",names[index])
    },
    getAllNames(){
      return this.$children.map(vm=>vm.name)  
    },
    selectedName(){
      return this.selected || this.$children[0].name
    },
    // swiper children
    updateChildren(selected){
      this.$children.forEach(vm=>{
        vm.reverse = this.curIdx > this.lastIdx ? false:true
        this.$nextTick(()=>{
          vm.selected = selected
        })
      })
    },
    playAuto(delay = 1000){
      let names = this.getAllNames()
      let selectName = this.selectedName()
      let idx = names.indexOf(selectName)
      const run = ()=>{
        // if(idx === names.length) idx = 0
        // this.$emit("update:selected",names[idx])
        idx++
        this.select(idx)
        setTimeout(run, delay)
      }
      setTimeout(run, delay)
    }
  },
  created() {},
  mounted() {
    let selected = this.selectedName()
    let names = this.getAllNames()
    // this.updateChildren(selected)
    this.select(names.indexOf(selected))

    if(this.autoplay){
      // this.playAuto()
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