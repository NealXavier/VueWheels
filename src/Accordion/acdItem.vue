<template>
  <div class="acdItem" @click="toggle">
    <div class="title">
        {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>>

<style>
</style>

<script>
export default {
  name:'acditem',
  data(){
    return {
      open:false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
      if(vm!==this){
        this.close()
      }
    })
  },
  methods:{
    toggle(){
      this.open=(this.open===true?false:true)
      if(this.open){
        this.eventBus && this.eventBus.$emit('update:selected',this)
      }
    },
    close(){
      this.open = false
    }
  }
}
</script>

<style lang="stylus">
  $grey = #ddd
  $border-radius = 4px
  .acdItem
    &>.content
      padding 0 8px
    & > .title
      border 1px solid $grey
      margin-top -1px
      margin-left -1px
      margin-right -1px
      display flex
      align-items center
      padding 0 8px
    &:first-child > .title
      border-top-left-radius $border-radius
      border-top-right-radius $border-radius
    &:last-child > .title
      border-bottom-left-radius $border-radius
      border-bottom-right-radius $border-radius
</style>
