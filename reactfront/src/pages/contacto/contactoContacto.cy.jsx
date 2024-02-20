import React from 'react'
import Contacto from './contacto'

describe('<Contacto />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contacto />)
  })
})