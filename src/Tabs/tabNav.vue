<!--  -->
<template>
  <div class="tab-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions" class="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    selected:{
      type:String,
    }
  },
  data() {
    return {
      
    }
  },
  created() {
  },
  mounted() {
  },
};
</script>
<style lang="stylus" scoped>
  $tab-height = 40px
  .tab-nav
    height $tab-height 
    display flex
    align-items center
    justify-content flex-start
    border 1px solid red
    & > .actions-wrapper
      margin-left auto
      padding-right 2em
</style>