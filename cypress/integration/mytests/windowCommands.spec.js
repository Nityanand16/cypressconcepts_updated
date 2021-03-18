describe("Window Test Suite Commands", () => {
  before(() => {
    cy.visit("#/login?_k=kzhyxx");
  });

  it("Window test commands-URI Properties", () => {
    cy.window().should((win) => {
      const loc = win.location;
      expect(loc.hash).to.equal("#/login?_k=kzhyxx");
      expect(loc.host).to.equal("react-redux.realworld.io");
      expect(loc.pathname).to.equal("/");
      expect(loc.protocol).to.equal("https:");
    });
  });

  it("CY Test commands - URI Properties", () => {
    cy.location("hash").should("eq", "#/login?_k=kzhyxx");
    cy.location("host").should("eq", "react-redux.realworld.io");
    cy.location("pathname").should("eq", "/");
    cy.location("protocol").should("eq", "https:");
  });

  it("Windows test commands-Page Reload", () => {
    cy.window().should((win) => {
      win.location.reload();
    });
  });

  it("CY Test Commands - Page Reload", () => {
    cy.reload();
  });




  
});
