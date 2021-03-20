describe("Window Test Suite Commands", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
  });

  it("Window Test Command - Page Navigation", () => {
    cy.window().should(win => {
      win.history.back()
      //win.history.go(-1)
    });cy.contains('Home').should('be.visible')
    cy.window().should(win => {
      win.history.forward()
      //win.history.go(1)
    });cy.contains('Log in to ZeroBank').should('be.visible')
  });

  it('CY Test Commands - Page Navigation', () => {
    cy.go('back') //cy.go(-1)
    cy.contains('Home').should('be.visible')
    cy.go('forward')  //cy.go(1)
    cy.contains('Log in to ZeroBank').should('be.visible')
  })

  it('Window Test Commands - localStorage', () =>{
    cy.window().should(win => {
      expect(win.localStorage.length).to.equal(0)
      win.localStorage.setItem('Name', 'Nitya') //We can see this item in the local storage of app.
      expect(win.localStorage.getItem('Name')).to.equal('Nitya')
    })
  })

  it('CY Test Commands - localStorage', () => {
    cy.clearLocalStorage()  //Removes all localStorage keys
  })

  it.only('Window Test Commands - localStorage', () =>{
    cy.window().should(win => {
      expect(win.sessionStorage.length).to.equal(0)
      win.sessionStorage.setItem('Name', 'Nitya') //We can see this item in the local storage of app.
      expect(win.sessionStorage.getItem('Name')).to.equal('Nitya')
    })
  })
    
});
