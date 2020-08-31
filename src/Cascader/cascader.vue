<template>
  <div class="cascader">
    <div class="popover">
        <x-cascader-item 
          :key="item.name"
          v-for="item in source" 
          :dataItem="item"></x-cascader-item>
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
    }
  },
  data() {
    return {

    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='' scoped>
</style>