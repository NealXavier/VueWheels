<template>
  <div class="cascader">
    <div class="trigger">
        {{result || '&nbsp;'}}
    </div>
    <div class="popover">
        <x-cascader-item 
          :items="source"
          :selected="selected"
          :load-data = "loadData"
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
      default:()=>[]
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
    result(){
      return this.selected.map(item=>item.name).join("/")
    }
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
        // console.log(this);
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
      this.loadData && this.loadData(newSelected,updateSource)
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  .cascader
    .trigger
      display inline-flex
      border 1px solid #00a1d6
      height 30px
      min-width 150px
      border-radius 4px
      color #666
    .popover
      height 200px
</style>