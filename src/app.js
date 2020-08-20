import Vue from 'vue'
import accordion from './Accordion/accordion'
import acditem from './Accordion/acdItem'


Vue.component('x-accordion',accordion)
Vue.component('x-acditem',acditem)

new Vue({
  el:"#app",
  data() {
    return {
      selectTab:'2'
    }
  },
})
