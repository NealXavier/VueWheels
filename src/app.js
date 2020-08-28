import Vue from 'vue'
// import accordion from './Accordion/accordion'
// import acditem from './Accordion/acdItem'
// import tab from './Tabs/tab'
// import tabItem from './Tabs/tabItem'
// import tabNav from './Tabs/tabNav'
// import tabContent from './Tabs/tabContent'
// import tabPane from './Tabs/tabPane'
// import row from './Row/row'
// import col from './Row/col'
import sliders from './Sliders/slides'
import sliderItem from './Sliders/slidesitem'


// Vue.component('x-accordion',accordion)
// Vue.component('x-acditem',acditem)

// Vue.component('x-tab',tab)
// Vue.component('x-tab-nav',tabNav)
// Vue.component('x-tab-item',tabItem)
// Vue.component('x-tab-content',tabContent)
// Vue.component('x-tab-pane',tabPane)

// Vue.component('x-row',row)
// Vue.component('x-col',col)

Vue.component('x-sliders',sliders)
Vue.component('x-slides-item',sliderItem)

new Vue({
  el:"#app",
  data() {
    return {
      // Accordion
      // selectTab:1

      // Tab
      // selectedTab:"gs",   //chosen
      // direction:{
      //   type:String,
      //   default:"horizontal",
      //   validator(value){
      //     return ["horizontal,vertical"].includes(value)
      //   }
      // }
      // Sliders
      selected:"Warriors"
    }
  },
  created(){
  }
})
