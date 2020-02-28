/**
 * @file 测试computed
 * 
用 call 还是 shallowMount？
两种技术对于测试计算属性都很有用。call 可以在以下情况被使用：

1. 你在测试一个生命周期方法中执行了某些耗时操作的组件，而你想在针对计算属性的单元测试中绕过这些；
2. 你想 stub 掉 this 上的某些值。使用 call 并传递一个自定义的上下文会很有用。
当然，你也要确保值被正确的渲染了，所以在测试计算属性时要保证选择了正确的技术，并测试所有边缘情况。

#总结
可以使用 shallowMount 并断言渲染后的置标代码来测试计算属性
复杂的计算属性可以使用 call 被单独的测试
 */
import { shallowMount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer'

// 测试computed有两种方式
describe('NumberRenderer.vue', () => {
  // 通过渲染进行测试
  it('renders even numbers', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe('2,4,6,8')
  })

  // 用call进行测试
  it('renders odd numbers', () => {
    const localThis = { even: false }

    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1,3,5,7,9')
  })
})