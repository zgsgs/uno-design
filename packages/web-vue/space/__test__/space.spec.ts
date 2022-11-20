import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { USpace } from '../index'

describe('Space', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(USpace)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-space')
  })
})
