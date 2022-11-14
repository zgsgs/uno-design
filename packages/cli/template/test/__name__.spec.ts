import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test } from 'vitest'
import { <%= upperPrefix %><%= displayName %> } from '../index'

describe('<%= displayName %>', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(<%= upperPrefix %><%= displayName %>)
  })
  test('class', () => {
    expect(wrapper.classes()).toContain('<%= prefix %>-<%= name %>')
  })
})
