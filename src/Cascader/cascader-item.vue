<template>
  <div class="cascader-item">
      <div class="leftItems">
        <div
          class="label"
          v-for="item in items"
          @click="leftSelected = item"
          :key="item.name"
        >{{item.name}}</div>
      </div>
      <div class="rightItems"
          v-if="rightItems">
          <x-cascader-item
            :items="rightItems">
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
  },
  data() {
    return {
      leftSelected:undefined
    };
  },
  computed: {
    rightItems(){
      if(this.leftSelected && this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
    }
  },
  methods: {
    isChildrenExist(dataItem) {
      return dataItem.children ? true : false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  .cascader-item
    display flex
    .leftItems
      border 1px solid green
</style>