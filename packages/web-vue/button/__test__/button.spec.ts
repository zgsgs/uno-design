import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { UButton } from '../index'

describe('Button', () => {
  test('class', () => {
    const wrapper = mount(UButton)
    expect(wrapper.classes()).toContain('u-button')
  })
})
