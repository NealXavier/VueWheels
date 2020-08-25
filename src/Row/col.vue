<template>
  <div class="col" :class="colClasses"
        :style="colStyle">
        <slot></slot>
  </div>
</template>

<script>
const  validator = obj => {
  let keys = Object.keys(obj)
  let valid = keys.every(key=>{
    return ["span","offset"].includes(key)
  })
  return valid
}
export default {
  props: {
    span:{type:[Number,String],},
    offset:{type:[Number,String],},
    phone:{type:Object,validator},
    pad:{type:Object,validator},
    narrowPc:{type:Object,validator},
    pc:{type:Object,validator},
    widePc:{type:Object,validator},
  },
  data() {
    return {
      gutter:0
    };
  },
  methods: {
    createClasses(setting,device){
      if(!setting) return []
      if(!device) device = ""
      let arr = []
      if(setting.span){arr.push(`col-${device}${setting.span}`)}
      if(setting.offset){arr.push(`col-${device}${setting.offset}`)}
      return arr
    },
  },
  computed:{
    colClasses(){
      let {span,offset,phone,pad,narrowPc,pc,widePc} = this
      
      return [
        ...this.createClasses({span,offset}),
        ...this.createClasses(phone,"phone-"),
        ...this.createClasses(pad,"pad-"),
        ...this.createClasses(narrowPc,"narrowPc-"),
        ...this.createClasses(pc,"pc-"),
        ...this.createClasses(widePc,"widePc-")
      ]
    },
    colStyle(){
      return {
        paddingLeft:this.gutter/2+'px',
        paddingRight:this.gutter/2+'px'
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='stylus' scoped>
  $col-prefix = "col-"
  $offset-prefix = "offset-"
  $col-phone-prefix = "col-phone-"
  $offset-phone-prefix  = "offset-phone-"
  $col-narrowPc-prefix = "col-narrowPc-"
  $offset-narrowPc-prefix  = "offset-narrowPc-"
  $col-pc-prefix = "col-pc-"
  $offset-pc-prefix = "offset-pc-"
  $col-widePc-prefix = "col-widePc-"
  $offset-widePc-prefix = "offset-widePc-"
  .col{
    border 1px solid green
    height:100px;
    for num in (1..24){
      &.{$col-prefix}{num}{
        width (num/24)*100%
      }
    }
    for num in (1..24){
      &.{$offset-prefix}{num}{
        margin-left (num/24)*100%
      }
    }
    @media (max-width: 576px) {
      for num in (1..24){
        &.{$col-phone-prefix}{num}{
          width (num/24)*100%
        }
      }
      for num in (1..24){
        &.{$offset-phone-prefix}{num}{
          margin-left (num/24)*100%
        }
      } 
    }
    @media (max-width: 768px) {
      for num in (1..24){
        &.{$col-pad-prefix}{num}{
          width (num/24)*100%
        }
      }
      for num in (1..24){
        &.{$offset-pad-prefix}{num}{
          margin-left (num/24)*100%
        }
      } 
    }
    @media (max-width: 992px) {
      for num in (1..24){
        &.{$col-narrowPc-prefix}{num}{
          width (num/24)*100%
        }
      }
      for num in (1..24){
        &.{$offset-narrowPc-prefix}{num}{
          margin-left (num/24)*100%
        }
      } 
    }
    @media (max-width: 1200px) {
      for num in (1..24){
        &.{$col-pc-prefix}{num}{
          width (num/24)*100%
        }
      }
      for num in (1..24){
        &.{$offset-pc-prefix}{num}{
          margin-left (num/24)*100%
        }
      } 
    }
    @media (min-width: 1201px) {
      for num in (1..24){
        &.{$col-widePc-prefix}{num}{
          width (num/24)*100%
        }
      }
      for num in (1..24){
        &.{$offset-widePc-prefix}{num}{
          margin-left (num/24)*100%
        }
      } 
    }
  }

</style>