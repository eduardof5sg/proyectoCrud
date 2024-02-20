import React from 'react'
import BarraNavegacion from './navbar'

describe('<BarraNavegacion />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BarraNavegacion />)
  })
})