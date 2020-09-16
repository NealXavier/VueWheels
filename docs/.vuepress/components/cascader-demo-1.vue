<template>
  <div style="padding-top: 16px;">
    <h2>数据非按需加载模式</h2>
    <p>
      <strong>预览</strong>
    </p>
    <x-cascader 
        :source="source"
        :selected.sync = "selected" 
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
  export default {
    components: {
      XCascader,
    },
    data () {
      return {
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
      ],
        selected:[],
        content: `
          <x-cascader 
            :source="source"
            :selected="selected"
            @update:selected = "updateSelected"
          ></x-cascader>,
          data: {
            selected: '',
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
      ],
          },
      `.replace(/^ {8}/gm, '').trim(),
        attribute:`
          source(必须),   数据源,数组类型,格式为[{"name":"...",children:[{..}]}]
          selected(必须), 每个层级选中的元素的name,传一个[]
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>