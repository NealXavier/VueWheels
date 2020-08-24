<template>
  <div class="col" :class="colClasses"
        :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span:{
      type:[Number,String],
    },
    offset:{
      type:[Number,String]
    }
  },
  data() {
    return {
      gutter:0
    };
  },
  computed:{
    colClasses(){
      let {span,offset} = this
      return [
        span && `span && col-${span}`, 
        offset && `offset-${offset}`
      ]
    },
    colStyle(){
      return {
        paddingLeft:this.gutter/2+'px',
        paddingRight:this.gutter/2+'px'
      }
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  $col-prefix = "col-"
  $offset-prefix = "offset-"
  .col{
    width:50%;
    height:100px;
    for num in (1..24){
      &.{$col-prefix}{num}{
        width (num/24)*100%
      }
    }
    for num in (1..24){
      &.{$offset-prefix}{num}{
        margin-left (num/24)*100%
      }
    }
  }

</style>