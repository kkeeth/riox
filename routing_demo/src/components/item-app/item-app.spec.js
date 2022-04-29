import ItemApp from './item-app.riot'
import { expect } from 'chai'
import { component } from 'riot'

describe('Item App Component Unit Test', () => {
  const mountItemAppComponent = component(ItemApp)

  it('The component properties are properly rendered', () => {
    const div = document.createElement('div')

    const component = mountItemAppComponent(div, {
      message: 'hello',
    })

    expect(component.$('p').innerHTML).to.be.equal('hello')
  })
})
