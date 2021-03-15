describe('different commands of get and find', ()=>{

  it('verify the tittle for google', ()=>{

    cy.visit('https://www.google.com/')
    cy.title().should('have.contains','Google') //assert
    cy.title().should('eq','Google')  //assert
    cy.title().should('include', 'Google')  //assert

    cy.get('input[name="q"]',{timeout:20000}) //default timeout is 4000 which we can see in the test runner
    //we give the explicit timeout to that particular element, this is dynamic by nature
    //we can pass the two parameters also to the get element as we did in row10

    cy.get('input[name="q"]',{log:false}) //by using this log, we can't see this in the
    //left side in test runner

    cy.get('input[name="q"]'),{within:document.getElementsByName('li')}
    //document refere to the current loaded page in that we need to search 'input[name = "q"]

    cy.get('input[name="q"]').should('be.visible')
    //cy.get('input[name="q"]').should('be.disabled')
    cy.get('input[name="q"]').should('be.enabled')
    cy.get('input[name="q"]').should('not.have.attr', 'class','hello')
    cy.get('input[name="q"]').should('not.have.attr', 'class','hello')
      .and().should('have.value','0')

    cy.get('#search').within(()=>{
        cy.get('#q').should('have.text','New')

    })

    //find
    cy.get('#q').find('#f',{log:false})
    cy.get('#q').find('#f',{timeout:5000})

    //or

    //cy.get('#q').find('#f'{log:false,timeout:5000})
    //   {log:false} and {timeout:5ooo} are objects so we can pass two parameters also

  })
  
  






})
