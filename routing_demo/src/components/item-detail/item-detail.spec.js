import ItemDetail from './item-detail.riot'
import { expect } from 'chai'
import { component } from 'riot'

describe('Item App Component Unit Test', () => {
  const mountItemDetailComponent = component(ItemDetail)

  it('The component properties are properly rendered', () => {
    const div = document.createElement('div')

    const component = mountItemDetailComponent(div, {
      message: 'hello',
    })

    expect(component.$('p').innerHTML).to.be.equal('hello')
  })
})
