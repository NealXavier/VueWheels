<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <x-accordion :selected.sync = "selectTab">
      <x-acditem title="Lakers" name="1">Lebron James</x-acditem>
      <x-acditem title="Warriors" name="2">Stephen Curry</x-acditem>
      <x-acditem title="Nets" name="3">Kevin Durant</x-acditem>
    </x-accordion>
    
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
  import XAccordion from '../../../src/Accordion/accordion'
  import XAcditem from '../../../src/Accordion/acdItem'
  export default {
    components: {
      XAccordion, XAcditem
    },
    data () {
      return {
        selectTab: ['1'],
        content: `
          <x-accordion :selected.sync = "selectTab">
            <x-acditem title="Lakers" name="1">Lebron James</x-acditem>
            <x-acditem title="Warriors" name="2">Stephen Curry</x-acditem>
            <x-acditem title="Nets" name="3">Kevin Durant</x-acditem>
          </x-accordion>
          data: {
            selectTab: '1'
          }
      `.replace(/^ {8}/gm, '').trim(),
        attribute:`
          selected(必须),表示默认选中项,类型为数组，和item的name对应,默认为[]
          single(可选), 表示是否单选，默认为false
          name[item属性](必须),表示当前项的标识,默认为null
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>