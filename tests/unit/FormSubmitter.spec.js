import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import FormSubmitter from '@/components/FormSubmitter'

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe('FormSubmitter.vue', () => {
  it('renders a notification when submitted successful', async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    })

    wrapper.find('[data-username]').setValue('Jack')
    wrapper.find('form').trigger('submit.prevent')

    // 确保包括nextTick在内的所有promises都被resolve，并且Vue也会更新DOM。
    await flushPromises()

    expect(wrapper.find('.message').text())
      .toBe('Thank you for your submission, Jack.')
    expect(url).toBe('/api/v1/register')
    expect(data).toEqual({ username: 'Jack' })
  })
})

/* describe('FormSubmitter.vue', () => {
  it('reveals a notification when submitted', async () => {
    // Arrange
    const wrapper = shallowMount(FormSubmitter)

    // Act
    wrapper.find('[data-username]').setValue('Jack')
    wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    // Assert
    expect(wrapper.find('.message').text())
      .toBe('Thank you for your submission, Jack.')
  })
}) */