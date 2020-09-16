<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <x-slides :selected.sync="selected">
      <x-slides-item name="Warriors">
        <div class="box">Warriors</div>
      </x-slides-item>
      <x-slides-item name="Lakers">
        <div class="box">Lakers</div>
      </x-slides-item>
      <x-slides-item name="Nets">
        <div class="box">Nets</div>
    </x-slides-item>
    </x-slides>

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
  import XSlides from '../../../src/Sliders/slides'
  import XSlidesItem from '../../../src/Sliders/slidesitem'
  export default {
    components: {
      XSlides, XSlidesItem
    },
    data () {
      return {
        selected: "Warriors",
        content: `
          <x-slides :selected.sync="selected">
            <x-slides-item name="Warriors">
              <div class="box">Warriors</div>
            </x-slides-item>
            <x-slides-item name="Lakers">
              <div class="box">Lakers</div>
            </x-slides-item>
            <x-slides-item name="Nets">
              <div class="box">Nets</div>
          </x-slides-item>
          </x-slides>
          data: {
            selected: 'Warriors'
          }
          <style lang="stylus" scoped>
            .box
              width:500px;
              height: 200px;
              display:flex;
              justify-content: center;
              align-items: center;
          </style>
      `.replace(/^ {8}/gm, '').trim(),
        attribute:`
          autoplay, 是否自动播放，默认为true
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .box 
    width:500px;
    height: 200px;
    display:flex;
    justify-content: center;
    align-items: center;
</style>