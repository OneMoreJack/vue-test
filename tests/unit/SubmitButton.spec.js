/**
 * @file 测试Props
 */

import { shallowMount }  from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton'

/* describe('SubmitButton.vue', () => {
  it('displays a no authorized message', () => {
    const msg = 'submit'
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg
      }
    })

    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe('submit')
  })
}) */

/**
 * 工厂函数
 */
const msg = 'submit'
const factory = (propsData) => {
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('SubmitButton', () => {
  describe('has admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory()

      expect(wrapper.find('span').text()).toBe('Not Authorized')
      expect(wrapper.find('button').text()).toBe('submit')
    })
  })

  describe('does not have admin privileges', () => {
    it('renders a message', () => {
      const wrapper = factory({ isAdmin: true })

      expect(wrapper.find('span').text()).toBe('Admin Privileges')
      expect(wrapper.find('button').text()).toBe('submit')
    })
  })
})