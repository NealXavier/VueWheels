<!--  -->
<template>
  <transition name="slide">
    <div class="slide-item" :class="{reverse}" v-if="isVisible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name:"sliderItem",
  props: {
    name:{
      type:String,
      required:true
    }
  },
  data() {
    return {
      selected:undefined,
      reverse:undefined,
    };
  },
  computed:{
    isVisible(){
      return this.selected === this.name
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped lang='stylus'>
  .slide-item
    flex-shrink 0
  .slide-leave-active
    position absolute
    left 0
    top 0
  .slide-enter-active,
  .slide-leave-active
    transition all 1s
  .slide-enter
    transform translateX(100%)
  .slide-enter.reverse
    transform translateX(-100%)
  .slide-leave-to
    transform translateX(-100%)
  .slide-leave-to.reverse
    transform translateX(100%)
</style>