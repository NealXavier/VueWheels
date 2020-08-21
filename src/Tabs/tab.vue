<!--  -->
<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  created() {
    this.eventBus.$on("trigger:selected", (name) => {
      this.$emit("update:selected", name);
      this.eventBus.$emit("update:selected", name);
    });
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
  },
};
</script>
<style scoped>
</style>