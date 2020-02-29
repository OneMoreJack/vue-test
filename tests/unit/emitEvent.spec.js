/**
 * @file 测试已发出的事件
 */

import { shallowMount } from '@vue/test-utils'
import Emitter from '@/components/Emitter'

describe('Emitter.vue', () => {
  it('emits an event with two args', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })

  // 不加载组件的情况下测试事件
  it('emits an event without mounting the components', () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args]}

    // 因为 $emit 只是一个 JavaScript 对象，所以你可以 mock 掉 $emit，
    // 并通过使用 call 将其附加到 emitEvent 的 this 上下文中。
    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})