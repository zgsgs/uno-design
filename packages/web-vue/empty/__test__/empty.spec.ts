import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { UEmpty } from '../index'

describe('Empty', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(UEmpty)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-empty')
  })
})
