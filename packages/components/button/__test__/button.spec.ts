import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { UButton } from '../index'

describe('Divider', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(UButton)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-button')
  })
})
