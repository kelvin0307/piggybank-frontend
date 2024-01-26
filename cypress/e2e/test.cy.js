describe('Check transfer header', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#account1').click()
    cy.visit('http://localhost:3000/transfer')
    cy.wait(200)
    cy.get('#transfer-header').contains('Overboeken');

  })
})

describe('Check transfer ', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#account1').click()
    cy.visit('http://localhost:3000/transfer')
    cy.get('#account-selection').select('Sara Ravestein')
    cy.get('#amount').type(50)
    cy.get('#text-area-transfer').click().type('Test')
    cy.get('#transfer-button').click()
    cy.wait(300)
    cy.get('.alert').should('be.visible')

  })
})

describe('Check logout', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#account1').click()
    cy.get('#logout-button').click()
    cy.get('#account2').click()

  })
})