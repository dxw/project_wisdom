/* eslint-env jest */
import { resizeContainer, render } from '../src/javascripts/lib/helpers'
import createRangePolyfill from './polyfills/createRange'

if (!document.createRange) {
  createRangePolyfill()
}

const client = {
  invoke: jest.fn()
}

describe('resizeContainer', () => {
  it('client.invoke has been called', () => {
    resizeContainer(client)
    expect(client.invoke).toHaveBeenCalled()
  })
})

describe('render', () => {
  it('should replace target dom node with the given HTML string', () => {
    document.body.innerHTML = '<div id="placeholder"></div>'
    expect(document.querySelectorAll('#placeholder').length).toBe(1)

    render('#placeholder', '<div id="app"></div>')
    expect(document.querySelectorAll('#placeholder').length).toBe(0)
    expect(document.querySelectorAll('#app').length).toBe(1)
  })
})
