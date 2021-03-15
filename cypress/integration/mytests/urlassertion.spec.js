describe('launch my app', ()=> {

    it('app testing', ()=>{

        cy.visit('https://www.spicejet.com')
        cy.contains('DEALS')
        cy.contains('DEALS').click()
        cy.url().should('include', '/RedHotOffers') //This is an assertation
    })
})
