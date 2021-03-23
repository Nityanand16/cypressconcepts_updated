describe ('Web Element Commands - Traversal Commands', () => {

    before(() => {
        cy.visit('http://127.0.0.1:5500/cypress/support/webElementTraverseCommands.html')
    })

    it('Get command', () => {
        cy.get('input[type="text"]').type('Nitya')
        //cy.get('input[name="date"]').type('28-03-2021')   error as cypress only accept the date yyyy-dd-mm
        cy.get('input[name="date"]').type('2021-03-28')
    })

    it('Get Multiple Element - Limit scope', () => {
        //click() is only for one element but { multiple: true } will click on all nodes with "Button"
        //cy.get('Button').click({ multiple: true })    //total 9 Button
        
        //We can limit the scope of this click
        // cy.get('fieldset[id="GETCOMMAND"]').within(field => {
        //     cy.get('Button').click({multiple: true}) //total 5 Button
        //})
        //or
        cy.get('fieldset[id="GETCOMMAND"]').find('Button').click({multiple: true})  //total 5 Button
    })

    it('Get Multiple Element - click based on index value', () => {
        //cy.get('Button').click()    //error as it only perform click on one element while there are multiple
        cy.get('Button').should('have.length', 9)
        cy.get('Button').eq(0).click()  //first
        cy.get('Button').eq(1).click()      //second
        cy.get('Button').eq(-1).click()     //last
        cy.get('Button').first().click()    //first
        cy.get('Button').last().click()     //last
    })

    it.only('Get Multiple Element - click based on Relationship', () => {
        //big block->childreens(fieldset)->last childreen(fieldset)->find(all with the name checkbox)->check
        cy.get('fieldset[id=GETCOMMAND]').children().last().find(':checkbox').check({multiple: true})
        //cy.get('fieldset[id=GETCOMMAND]').children().last().find(':checkbox').eq(0).check()   //click first check box

        //checkbox->just previous parent->find(all button)->click(first Button)
        cy.get(':checkbox').parent().prev().find(':Button').first().click()

        cy.reload()

        //checkbox->index2->siblings(with the node checkbox)->check
        cy.get(':checkbox').eq(2).siblings(':checkbox').check({multiple: true})

        cy.reload()

        cy.get(':Button').each(btn => {
            btn.hide()
        })

        cy.get('span').each(spn => {
            cy.log(spn.text())
        })

        cy.reload()
    })

})
