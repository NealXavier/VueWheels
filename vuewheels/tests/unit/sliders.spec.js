import chai ,{expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount,mount} from '@vue/test-utils'
import slides from '../../src/components/Sliders/slides.vue'
// import slidesItem from '../src/components/Sliders/slides-item.vue'
import vue from 'vue';

chai.use(sinonChai)

describe("slides.vue",()=>{
  it("存在",()=>{
    expect(slides).to.exist
  })
})