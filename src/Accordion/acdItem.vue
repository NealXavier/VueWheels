<template>
  <div class="acdItem" @click="toggle">
    <div class="title">
        {{title}}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>>

<script>
export default {
  name:'acditem',
  props: {
    title: {
      type: String,
      required: true
    },
    name:{
      type:String,
    },
  },
  data(){
    return {
      isOpen:false
    }
  },
  inject:['eventBus'],
  mounted(){
    this.eventBus && this.eventBus.$on('update:selected',(names)=>{
      if(names.indexOf(this.name)>=0){
        this.isOpen = true
      }else{
        this.isOpen = false
      }
    })
  },
  methods:{
    toggle(){
      if(this.isOpen){
        this.eventBus.$emit('update:removeSelected',this.name)
      }else{
        this.eventBus.$emit('update:addSelected',this.name)
      }  
    },
  }
}
</script>

<style lang="stylus">
  .acdItem
    &>.content
      padding 0 8px
    & > .title
      border 1px solid #ddd
      margin-top -1px
      margin-left -1px
      margin-right -1px
      display flex
      align-items center
      padding 0 8px
    &:first-child > .title
      border-top-left-radius 4px
      border-top-right-radius 4px
    &:last-child > .title
      border-bottom-left-radius 4px
      border-bottom-right-radius 4px
</style>
