describe('querying for DOM elements', () => {

    before(() => {
        cy.visit('https://example.cypress.io/commands/querying')
    })

    it('query for the button', () => {
        cy.get('#query-btn').should('contain', 'Button')
        cy.get('.query-btn').should('contain', 'Button')
    })










})