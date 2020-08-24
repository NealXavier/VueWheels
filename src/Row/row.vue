<!--  -->
<template>
  <div class="row" 
    :style="rowStyle">
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
  computed:{
    rowStyle(){
      return {
        marginLeft:- this.gutter/2+'px',
        marginRight:-this.gutter/2+'px'
      }
    }
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
</style>