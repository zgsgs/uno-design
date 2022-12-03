import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { UAvatar } from '../index'

describe('Avatar', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(UAvatar)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-avatar')
  })
})
