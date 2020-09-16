<template>
  <div class="cascader-item">
      <div class="leftItems">
        <div
          class="label"
          v-for="item in items" 
          @click="handleClick(item)"
          :key="item.name"
        >{{item.name}}
        <span class="icons">
          <template v-if="loadingItem && loadingItem.name && loadingItem.name === item.name">
            <icon name="loading" class="loading"></icon>
          </template>
          <template v-else>
            <icon
              v-if="rightArrowisVisible(item)" 
              class="next" name="right"></icon>
           </template>
        </span>
        </div> 
      </div>
      <div class="rightItems"
            v-if="rightItems">
          <x-cascader-item
            :load-data = "loadData"
            :items="rightItems"
            :level="level+1"
            :selected="selected"
            :loading-item = "loadingItem"
            @update:selected="onUpdateSelected">
          </x-cascader-item>
      </div>
  </div>
</template>

<script>
import Icon from '../icon'
export default {
  name: "x-cascader-item",
  components:{Icon},
  props: {
    loadingItem:{
      type:Object,
      default:function(){return {}}
    },
    items:{
      type:Array,
    },
    selected:{
      type:Array,
      default: ()=>[]
    },
    level:{
      type:Number,
      default:0
    },
    loadData:{
      type:Function
    }
  },
  data() {
    return {
    };
  },
  computed: {
    rightItems(){
      if(this.selected[this.level]){
        let selected = this.items.filter(item=>item.name === this.selected[this.level].name)
        if(selected && selected[0].children && selected[0].children.length > 0){
          return selected[0].children
        }
      }
    }
  },
  methods: {
    rightArrowisVisible(item){
      if(this.loadData){
        return item.isLeaf?false:true
      }else{
        return item.children?true:false
      }
    },
    isChildrenExist(dataItem) {
      return dataItem.children ? true : false;
    },
    // emit the selected no object but array 
    handleClick(item){
      // not to modify the prop "selected" directly 
      // this.$set(this.selected,this.level,item)
      let copyArr = JSON.parse(JSON.stringify(this.selected))
      copyArr[this.level] = item
      // deleted after current level 
      copyArr.splice(this.level+1)
      
      this.$emit("update:selected",copyArr)
    },
    onUpdateSelected(selected){
      this.$emit("update:selected",selected)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .cascader-item
    display flex
    justify-content flex-start
    align-items flex-start
    .leftItems
      border 1px solid #999999
      height 150px
      overflow auto
      border-radius 2px
      .label
        display flex
        padding .5em 1em
        white-space nowrap
      .icons
        margin-left auto
        .next
          transform scale(0.5)
          vertical-align middle
        .loading 
          vertical-align middle
          animation spin 2s infinite linear
</style>