import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { ULink } from '../index'

describe('Link', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(ULink)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-link')
  })
})
