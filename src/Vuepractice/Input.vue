<!--  -->
<template>
  <div>
    <input type="text"
        :value="text"
        @input = "$emit('change',$event.target.value)">
  </div>
</template>

<script>
export default {
  name: "Input",
  model:{
    prop:'text',
    event:'change',
  },
  props: {
    text:{
      type:String,
      default(){
        return ""
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped lang=''>
</style>