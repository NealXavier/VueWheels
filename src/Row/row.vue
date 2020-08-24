<!--  -->
<template>
  <div class="row" 
    :style="{marginLeft:- gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter:{
      type:[Number,String],
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    this.$children.forEach(child=>{
      child.gutter = this.gutter 
    })
  },
};
</script>
<style scoped lang='stylus'>
  .row
    display: flex;
    // margin: 0 -10px;
</style>