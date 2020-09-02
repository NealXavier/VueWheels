<template>
  <div class="cascader">
    {{selected && selected[0]&& selected[0].name || '空'}}
    {{selected && selected[1]&& selected[1].name || '空'}}
    {{selected && selected[2]&& selected[2].name || '空'}}
    <div class="trigger">
    </div>
    <div class="popover">
        <x-cascader-item 
          :items="source"
          :selected="selected"
          @update:selected="handleSelected"></x-cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderitem from './cascader-item.vue'
export default {
  name:"cascader",
  components:{
    // import (x-cascader-item) component
    "x-cascader-item":cascaderitem
  },
  props: {
    source:{
      type:Array,
    },
    selected:{
      type:Array,
      default:()=>{[]}
    }
  },
  data() {
    return {
      level1Selected:null,
      level2Selected:null,
    }
  },
  computed:{
  },
  methods: {
    handleSelected(newSelected){
      this.$emit("update:selected",newSelected)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  .cascader
    .trigger
      border 1px solid red
      height 30px
      width 70px
    .popover
      border 1px solid green
      height 200px
</style>