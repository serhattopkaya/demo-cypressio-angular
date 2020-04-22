/// <reference types="cypress" />

context('Value Check', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })
 

  it('Page initial values are correct', () => {
    cy.get('[data-cy=name]').should('have.value', 'Dr IQ')
    cy.get('[data-cy=alterEgo]').should('have.value', 'Chuck Overstreet')
    cy.get('[data-cy=power]').should('have.value', 'Really Smart')
  })

  it('Check submitted values are correct', () => {
    cy.get('[data-cy=submit]').click()
    cy.contains('You submitted the following')
    cy.get('[data-cy=submitted-name]').contains('Dr IQ')
    cy.get('[data-cy=submitted-alterEgo]').contains('Chuck Overstreet')
    cy.get('[data-cy=submitted-power]').contains('Really Smart')
  })

  it('Check submitted values are correct (with fixtures)', () => {
    cy.get('[data-cy=submit]').click()
    cy.contains('You submitted the following')
    // Read values from hero.json file under fixtures folder
    cy.fixture('hero').then((jsonData) => {
      cy.get('[data-cy=submitted-name]').contains(jsonData.name)
      cy.get('[data-cy=submitted-alterEgo]').contains(jsonData.alterEgo)
      cy.get('[data-cy=submitted-power]').contains(jsonData.power)
    })
    
  })



})
