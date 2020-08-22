<!--  -->
<template>
  <div class="tab-pane" v-if="isVisible">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabPane",
  props:{
    name:{
      type:String,
    }
  },
  data() {
    return {
      isVisible:false
    };
  },
  inject:["eventBus"],
  created() {
    this.eventBus.$on("update:selected",(selected,vm)=>{
      this.isVisible = this.name === selected
    })
  },
  mounted() {},
};
</script>
<style lang="stylus" scoped>
  .tab-pane
    &.active
      background: red;
</style>