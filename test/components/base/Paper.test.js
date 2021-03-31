import { shallowMount } from '@vue/test-utils'
import Paper from '@/components/base/Paper.vue'

describe('Paper.vue', () => {
  it('correctly renders the content', () => {
    const text = 'Hello World'
    const wrapper = shallowMount(Paper, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toContain(text)
  })
})
