describe ('Web Element Commands - Traversal Commands', () => {

    before(() => {
        cy.visit('http://127.0.0.1:5500/cypress/support/webElementTraverseCommands.html')
    })

    it('Contains with text', () => {
        cy.contains('SPAN ONE').click()
        cy.contains('SPAN TWO').click()
    })

    it('Contains with text & Selector', () => {
        cy.contains('span','FIND ME').click()
        cy.contains('button','FIND ME').click()
        //cy.get('span:contains("FIND ME")').click()
    })

    it('Contains with value', () => {
        //this will work only if input type is submit and have value as an attribute
        cy.get('form').contains('Submit the form').click()
    })

    it('Contains with Regular Expression', () => {
        //cy.contains('Add').click()  //Always click the first button
        cy.contains(/^add$/i).click()  //click the matched button
    })

    it.only('Contains - Elements Preference order', () => {
        cy.contains('Search').click()
    })

})
