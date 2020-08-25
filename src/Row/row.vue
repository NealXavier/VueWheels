<!--  -->
<template>
  <div class="row" 
    :style="rowStyle"
    :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter:{
      type:[Number,String],
    },
    align:{
      type:String,
      validator(val){
        return ["center","left","right"].includes(val)
      }
    },
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
    },
    rowClasses(){
      let {align} = this
      return [align && `align-${align}`]
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
    &.align-left
      justify-content flex-start  
    &.align-right
      justify-content flex-end
    &.align-center
      justify-content center
</style>