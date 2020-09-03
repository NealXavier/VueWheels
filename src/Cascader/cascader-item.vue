<template>
  <div class="cascader-item">
      <div class="leftItems">
        <div
          class="label"
          v-for="item in items"
          @click="handleClick(item)"
          :key="item.name"
        >{{item.name}}</div>
      </div>
      <div class="rightItems"
            v-if="rightItems">
          <x-cascader-item
            :items="rightItems"
            :level="level+1"
            :selected="selected"
            @update:selected="onUpdateSelected">
          </x-cascader-item>
      </div>
  </div>
</template>

<script>
export default {
  name: "x-cascader-item",
  props: {
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
    }
  },
  data() {
    return {
    };
  },
  computed: {
    rightItems(){
      let curSelected = this.selected[this.level]
      if(curSelected && curSelected.children){
        return curSelected.children
      }else{
        return null
      }
    }
  },
  methods: {
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
  .cascader-item
    display flex
    justify-content flex-start
    align-items flex-start
    .leftItems
      border 1px solid green
      height 100px
      overflow auto
</style>