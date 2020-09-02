<template>
  <div class="cascader">
    <div class="trigger">
    </div>
    <div class="popover">
        <x-cascader-item 
          :items="source"></x-cascader-item>
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
  },
  data() {
    return {
      level1Selected:null,
      level2Selected:null,
    }
  },
  computed:{
    level2Items(){
      if(this.level1Selected){
        return this.level1Selected.children;
      }else{
        return []
      }
    },
    level3Items(){
      if(this.level2Selected){
        return this.level2Selected.children;
      }else{
        return []
      }
    }
  },
  methods: {},
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