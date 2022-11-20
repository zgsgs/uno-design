import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { UButtonGroup } from '../index'

describe('ButtonGroup', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(UButtonGroup)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('u-button-group')
  })
})
