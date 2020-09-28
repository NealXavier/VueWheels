<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
        {{result || '&nbsp;'}}
    </div>
    <div class="popover" v-if="popoverIsVisible">
        <x-cascader-item 
          :items="source"
          :selected="selected"
          :load-data = "loadData"
          :loading-item="loadingItem"
          @update:selected="handleSelected"></x-cascader-item>
    </div>
  </div>
</template>

<script>
import cascaderitem from './cascader-item.vue'
// import ClickOutside from '../../click-outside'
export default {
  name:"cascader",
  components:{
    // import (x-cascader-item) component
    "x-cascader-item":cascaderitem
  },
  // directives:{ClickOutside},
  mounted(){
    import("../../click-outside.js").then(ClickOutside=>{
      console.log(ClickOutside);
      this.directives = module
      Vue.directive = {ClickOutside}
    })
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
      popoverIsVisible:false,
      loadingItem:null
    }
  },
  computed:{
    result(){
      return this.selected.map(item=>item.name).join("/")
    }
  },
  methods: {
    close(){
      this.popoverIsVisible = false
    },
    open(){
      this.popoverIsVisible = true
    },
    toggle(){
      if(this.popoverIsVisible){
        this.close()
      }else{
        this.open()
      }
    },
    handleSelected(newSelected){
      this.$emit("update:selected",newSelected)
      const updateSource = (result)=>{
        let lastItem = newSelected[newSelected.length - 1]
        let copy = JSON.parse(JSON.stringify(this.source))
        let lastSelected = find(lastItem.id,copy)
        lastSelected.children = result
        this.$emit("update:source",copy)
        this.loadingItem = null
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
      let lastItem = newSelected[newSelected.length - 1]
      if(this.loadData && lastItem && (!lastItem.isLeaf)){
        this.loadingItem = lastItem
        this.loadData(newSelected,updateSource)
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  .cascader
      display inline-block
    .trigger
      border 1px solid #00a1d6
      height 30px
      min-width 150px
      border-radius 4px
      color #666
</style>