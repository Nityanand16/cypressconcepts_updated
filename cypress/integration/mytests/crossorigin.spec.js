describe('Home page', () =>{

  it('verify the title', () =>{

    cy.visit('https://facebook.com')
    cy.title('exixt', 'Facebook - Log In or Sign Up')
    cy.title().should('have.string','Facebook - Log på eller tilmeld dig')  //assert method1
    cy.title().should('eq','Facebook - Log på eller tilmeld dig')  //assert method2, should is a method and we passed two parameters
    expect('Facebook - Log In or Sign Up').to.equal('Facebook - Log In or Sign Up') //assert method3

    //cross origin is not allowed in same test case but we can open in another test case expression:

    //cy.visit('https://google.com')

  })

})

it('verify the title', () =>{

  cy.visit('https://google.com')
  cy.title('exixt', 'Google')


})
