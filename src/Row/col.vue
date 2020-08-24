<template>
  <div class="col" :class="[span && `span && col-${span}` , offset && `offset-${offset}`]"
        :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
    <div style="border:1px solid green;">
      <slot></slot>
    </div>
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
      // gutter:0
    };
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
    // padding 0 10px
    // background:#ddd;
    width:50%;
    height:100px;
    // border:1px solid green;
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