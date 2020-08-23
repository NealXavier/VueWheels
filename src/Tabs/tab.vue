<!--  -->
<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name:"Tab",
  props: {
    selected: {
      type: String,
    },
    direction:{
      default:"horizontal",
      validator(value){
        return ["horizontal","vertical"].includes(value)
      }
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods:{
    findChosenTabItem(name){
      let tabNav = this.$children.filter(vm=>vm.$options.name === "TabNav")
      let tabItem = tabNav[0].$children.filter(vm=>vm.$options.name === "TabItem" 
                            && vm.name === name)
      let chosenVm = tabItem[0]
      return chosenVm
    }
  },
  mounted() {
    // direction 
    if(this.direction === "horizontal" || ""){
      // debugger
      this.$el.style.flexDirection = "column"

    }
    this.eventBus.$emit("update:direction",this.direction,this)
  
    this.eventBus.$on("trigger:selected",(name)=>{
      let chosenVm = this.findChosenTabItem(name)
      this.$emit("update:selected",name,chosenVm,this.direction)
      this.eventBus.$emit("update:selected",name,chosenVm,this.direction)
    })
    let chosenVm = this.findChosenTabItem(this.selected)
    this.eventBus.$emit("update:selected",this.selected,chosenVm,this.direction)

  },
};
</script>
<style lang ="stylus" scoped>
  .tab
    display flex
</style>