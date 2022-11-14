import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { UButton } from '../index'

describe('Button', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(UButton, {
      props: {
        type: 'default',
        round: true,
        disable: true,
        loading: true,
        simple: true,
      },
    })
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-button')
  })
  test('type', () => {
    expect(wrapper.classes()).toContain('u-button__default')
  })
  test('round', () => {
    expect(wrapper.classes()).toContain('u-button__round')
  })
  test('disabled', () => {
    expect(wrapper.classes()).toContain('u-button__disabled')
  })
  test('onClick', async () => {
    const closeButton = wrapper.find('a')
    await closeButton.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
