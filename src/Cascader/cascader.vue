<template>
  <div class="cascader">
    <div>
      {{selected && selected[0] && selected[0].name || '空'}}
      {{selected && selected[1] && selected[1].name || '空'}}
    </div>
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
    },
    loadData:{
      type:Function,
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
      this.$emit("update:selected",newSelected);

      let lastItem = newSelected[newSelected.length - 1]

      const updateSource = (result)=>{
        let lastSelected = this.source.filter(item=>item.id === lastItem.id)[0]
        this.$set(lastSelected,"children",result)
        console.log(this.source)
      }

      this.loadData(newSelected,updateSource)
    },
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