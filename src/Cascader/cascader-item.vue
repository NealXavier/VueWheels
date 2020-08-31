<template>
  <div class="cascader-item">
      {{dataItem.name}}
      <x-cascader-item
        v-if="isChildrenExist(dataItem)"
        v-for="item in dataItem.children" 
        :key="item.name"
        :dataItem="item">
    </x-cascader-item>
  </div>
</template>

<script>
export default {
  name:"x-cascader-item",
  props: {
    dataItem:{
      type:Object,
    },
  },
  data() {
    return {};
  },
  computed:{
  },
  methods: {
    isChildrenExist(dataItem){
      return dataItem.children?true:false
    }
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  .cascader-item
    display inline-flex
    border 1px solid green
    .box 
      display flex
      border:1px solid red
</style>