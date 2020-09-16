<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div class="box">
      <x-tab :selected.sync="selectedTab">
      <x-tab-nav>
        <x-tab-item name="gs">Warriors</x-tab-item>
        <x-tab-item name="la" disabled>Lakers</x-tab-item>
        <x-tab-item name="bk">Nets</x-tab-item>
      </x-tab-nav>
      <x-tab-content>
        <x-tab-pane name="gs">StephenCurry</x-tab-pane>
        <x-tab-pane name="la">LeBronJames</x-tab-pane>
        <x-tab-pane name="bk">KevinDurant</x-tab-pane>
      </x-tab-content> 
    </x-tab>
    </div>
    <br/>
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
  import XTab from '../../../src/Tabs/tab'
  import XTabNav from '../../../src/Tabs/tabNav'
  import XTabItem from '../../../src/Tabs/tabItem'
  import XTabContent from '../../../src/Tabs/tabContent'
  import XTabPane from '../../../src/Tabs/tabPane'
  export default {
    components: {
      XTab, XTabNav,XTabItem,XTabContent,XTabPane
    },
    data () {
      return {
        selectedTab: "gs",
        content: `
          <x-tab :selected.sync="selectedTab">
            <x-tab-nav>
              <x-tab-item name="gs">Warriors</x-tab-item>
              <x-tab-item name="la" disabled>Lakers</x-tab-item>
              <x-tab-item name="bk">Nets</x-tab-item>
            </x-tab-nav>
            <x-tab-content>
              <x-tab-pane name="gs">StephenCurry</x-tab-pane>
              <x-tab-pane name="la">LeBronJames</x-tab-pane>
              <x-tab-pane name="bk">KevinDurant</x-tab-pane>
            </x-tab-content> 
          </x-tab>
      `.replace(/^ {8}/gm, '').trim(),
        attribute:`
          Tab
            selected(必须) String类型  默认为空,和TabItem的name属性对应
          TabItem
            disabled(可选) Boolean类型  默认为false  
            name(必须)     String类型   默认为空
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .box
    height 100px
</style>