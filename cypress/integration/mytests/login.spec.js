describe ('free crm app', ()=> {

  it ('login', ()=> {

    cy.visit('https://classic.crmpro.com/')

    //Assert by checking the title
    cy.title().should('exist','CRMPRO  - CRM software for customer relationship management, sales, and support.')

    //cy.getElementsByName('name="username"').type('nigup16@gmail.com')
    cy.get('input[name="username"]').type('nigup16@gmail.com')
    cy.get('input[name="password"]').type('Nitya1234')

    cy.get('input[type="submit"]').click()

    cy.title().should('exist','CRMPRO')

  })

})
