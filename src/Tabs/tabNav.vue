<template>
  <div class="tab-nav" ref="nav">
    <slot></slot>
    <div :class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions" class="actions"></slot>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  name: "TabNav",
  props: {
    selected: {
      type: String,
    },
  },
  data() {
    return {
      line: "",
      border:"",
      orentation:""
    };
  },
  computed: {},
  inject: ["eventBus"],
  created() {},
  mounted() {
    this.eventBus.$on("update:direction", (direction, vm) => {
      this.line = `line-${direction}`
      this.$el.style.flexDirection =
        direction === "vertical" ? "column" : "row";
      this.updateLinePosition(vm, direction);
      this.updateBorderPosition(direction);
    });
    this.eventBus.$on("update:selected", (selected, vm,direction) => {
      this.updateLinePosition(vm, direction);
    });
  },
  methods: {
    updateBorderPosition(direction){
      if(direction === "horizontal"){
        this.$refs.nav.style.borderBottom = `1px solid #ddd`
      }else{
        this.$refs.nav.style.borderRight = `1px solid #ddd`
      }
    },
    updateLinePosition(vm, direction) {
      let { width, height, left, top } = vm.$el.getBoundingClientRect();
      let { top: top2 ,left:left2} = this.$refs.nav.getBoundingClientRect();
      if(direction === "vertical"){
        this.$refs.line.style.height = `${height}px`;
        this.$refs.line.style.transform = `translateY(${top - top2}px)`;
        // this.$refs.line.style.borderRight = "1px solid #00a1d6";
      }else{
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left - left2}px)`
        // this.$refs.line.style.borderBottom = "1px solid #00a1d6";
      }
      // if(this.direction === "vertical"){
      // }else{
      // this.$el.style.display = "flex"
      // this.$el.style.flexDirection = "column"

      // this.$refs.line.style.height = `${height}px`;
      // this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.transform = `translateY(${top - top2}px)`;

      // this.$refs.line.style.borderRight = "1px solid #00a1d6";
      // this.$refs.line.style.right = 0;
      // this.$refs.line.style.transform = `translateX(${left - left2}px)`
      // }
    },
  },
};
</script>
<style lang="stylus" scoped>
$tab-height = 40px;
$border-color = #ddd;
.tab-nav {
  height: $tab-height;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  & > .border{
    position absolute
  }
  & > .line-horizontal {
    height $tab-height 
    display flex
    align-items center
    justify-content flex-start
    position absolute
    border-bottom 1px solid #00a1d6
    transition: all 250ms;
  }
  & > .line-vertical {
    display flex
    flex-direction: vertical;
    position: absolute;
    right: 0;
    border-right: 1px solid #00a1d6;
    transition: all 250ms;
  }
  & > .actions-wrapper {
    margin-left: auto;
    padding-right: 2em;
  }
}
</style>