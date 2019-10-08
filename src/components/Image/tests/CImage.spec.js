import { mount } from '@vue/test-utils'
import Component from '../CImg'

const ComponentName = 'CImg'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    src: './image-source',
    alt: 'image',
    width: 400,
    height: 200,
    block: true,
    fluidGrow: true,
    rounded: 'right',
    // thumbnail: true,
    align: 'right',
    blankColor: 'red',
    rounded: 'right'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('sets align properly', () => {
    expect(customWrapper.vm.alignClass).toBe('float-right')
    customWrapper.setProps({ align: 'left'})
    expect(customWrapper.vm.alignClass).toBe('float-left')
    customWrapper.setProps({ align: 'center'})
    expect(customWrapper.vm.alignClass).toBe('mx-auto')
  })
  it('changes rounding properly', () => {
    expect(customWrapper.classes().includes('rounded-right')).toBe(true)
    customWrapper.setProps({ rounded: true})
    expect(customWrapper.classes().includes('rounded')).toBe(true)
  })
})
