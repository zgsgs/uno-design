import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { <%= upperPrefix %><%= displayName %> } from '../index'

describe('<%= displayName %>', () => {
  test('class', () => {
    const wrapper = mount(<%= upperPrefix %><%= displayName %>)
    expect(wrapper.classes()).toContain('<%= prefix %>-<%= name %>')
  })
})
