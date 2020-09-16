<template>
  <div style="padding-top: 16px;">
    <h2>数据按需加载模式</h2>
    <p>
      <strong>预览</strong>
    </p>
    <x-cascader 
        :source.sync="source"
        :selected.sync = "selected"
        :load-data="loadData" 
    ></x-cascader>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>可选属性</strong>
    </p>
    <pre><code>{{attribute}}</code></pre>

  </div>
</template>
<script>
  import XCascader from '../../../src/Cascader/cascader'
  import db from '../../../src/Cascader/db.js'
  
  // 用计时器来模拟按需加载
  function ajax(parent_id = 0){
    return new Promise((resolve,reject)=>{
        try {
          setTimeout(() => {
            let result = db.filter(item=>item.parent_id == parent_id)        
            result.forEach(item1=>{
              if(db.filter(item2=>item2.parent_id === item1.id).length){
                item1.isLeaf = false
              }else{
                item1.isLeaf = true
              }
            })
            resolve(result)    
          }, 1000);
        } catch (error) {
          reject('出错了.')
        }
    })
  }
  export default {
    components: {
      XCascader,
    },
    mounted(){
      if(this.source.length === 0){
        ajax().then(val=>{
          this.source = val  // top level
        })
      }
    },
    methods:{
      loadData(selected,callback){
        let {id} = selected[this.selected.length - 1]
        ajax(id).then(result=>{
          callback(result)
        })
      },
    },
    data () {
      return {
        source:[],
        selected:[],
        content: `
          <x-cascader 
            :source="source"
            :selected.sync = "selected"
            :loadData="loadData"
          ></x-cascader>
          methods:{
            updateSelected(selected){
            // set data "selected" value
            this.selected = selected
          },
        },
          data: {
            selected: [],
            source:[]
          },
      `.replace(/^ {8}/gm, '').trim(),
        attribute:`
          load-data(必须),模拟用当前点击节点请求数据的过程,
          source(必须),   数据源,数组类型,格式为[{"id": 1,"name": "北京","parent_id": 0,isLeaf: false}],
                          其中isLeaf判断是否为叶子节点。需要前端拿到数据后手动添加。
          selected(必须), 每个层级选中的元素的name,传一个[]
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>