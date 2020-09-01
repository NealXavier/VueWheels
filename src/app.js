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
// import sliders from './Sliders/slides'
// import sliderItem from './Sliders/slidesitem'
import cascader from './Cascader/cascader'
// import cascaderitem from './Cascader/cascader-item'


// Vue.component('x-accordion',accordion)
// Vue.component('x-acditem',acditem)

// Vue.component('x-tab',tab)
// Vue.component('x-tab-nav',tabNav)
// Vue.component('x-tab-item',tabItem)
// Vue.component('x-tab-content',tabContent)
// Vue.component('x-tab-pane',tabPane)

// Vue.component('x-row',row)
// Vue.component('x-col',col)

// Vue.component('x-sliders',sliders)
// Vue.component('x-slides-item',sliderItem)

Vue.component('x-cascader',cascader)
// Vue.component('x-cascaderitem',cascaderitem)


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
      // selected:"Warriors"

      // Cascader
      source:[
        {
        name:"浙江",
        children:[
          {
            name:"杭州",
            children:[
              {name:"上城"},
              {name:"下城"},
              {name:"江干"}
            ]
          },
          {
            name:"嘉兴",
            children:[
              {name:"南湖"},
              {name:"秀洲"},
              {name:"嘉善"}
            ]
          }
        ]
        },
        {
        name:"广东",
        children:[
          {
            name:"惠州",
            children:[
              {name:"惠城"},
              {name:"惠阳"},
              {name:"惠东"}
            ]
          }
        ]
        },
        {
          name:"黑龙江",
          children:[
            {name:"哈尔滨"},
            {name:"齐齐哈尔"}
          ]
        }
          // {parent_id:null,name:"浙江",id:1},
          // {parent_id:1,name:"杭州",id:2},
          // {parent_id:1,name:"嘉兴",id:3},
          // {parent_id:null,name:"广东",id:4},
          // {parent_id:4,name:"惠州",id:5}
        ]
    }
  },
  created(){
  }
})
