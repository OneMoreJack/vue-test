import { shallowMount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter'

describe('FormSubmitter.vue', () => {
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
})