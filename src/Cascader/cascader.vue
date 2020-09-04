<template>
  <div class="cascader">
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
    }
  },
  computed:{
  },
  methods: {
    handleSelected(newSelected){
      this.$emit("update:selected",newSelected)

      const updateSource = (result)=>{
        let lastItem = newSelected[newSelected.length - 1]
        let copy = JSON.parse(JSON.stringify(this.source))
        let lastSelected = find(lastItem.id,copy)
        lastSelected.children = result
        
        this.$emit("update:source",copy)
      }
      // 找到lastSelected 位于 this.source 的位置。
      function find(id,items){
        for(let i = 0,j=items.length;i < j;i++){
          if(id === items[i].id){
            return items[i]
          }else{
            if(items[i].children && items[i].children.length > 0){
              if(find(id,items[i].children)){
                return find(id,items[i].children)
              }
            }else{
              continue
            }
          }
        }
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