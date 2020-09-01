<template>
  <div class="cascader">
    <div class="trigger">
    </div>
    <div class="popover">
        <!-- <x-cascader-item 
          :key="item.name"
          v-for="item in source" 
          :dataItem="item"></x-cascader-item> -->
          <div class="wrapper">
              <div class="level1">
                <div class="label"
                  v-for="item1 in source"
                  @click="level1Selected = item1"
                  :key="item1.name">
                  {{item1.name}}
                </div>
              </div>
              <div class="level2">
                <div class="label"
                  v-for="item2 in level2Items"
                  @click="level2Selected = item2"
                  :key="item2.name">
                  {{item2.name}}
                  </div>
              </div>
              <div class="level3">
                <div class="label"
                    v-for="item3 in level3Items"
                    :key="item3.name">
                  {{item3.name}}
                </div>
              </div>
          </div>
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
      .wrapper
        display flex
        .label
          white-space nowrap
          border 1px solid green
</style>