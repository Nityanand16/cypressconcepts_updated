describe("Shadow DOM Elements", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/cypress/support/shadowDOM.html");
  });

  it("Assert the Text within the Light DOM", () => {
    cy.get("h2").should("have.text", "I belong to Regular/Light Dom");
    //h2 is in shadow DOM also but it pick the h2 from Light Dom
  });

  it("Text Box with in the Light DOM", () => {
    cy.get('input[id="fullname"]')
      .type("Nitya")
      .should("have.value", "Nitya");
  });

  it("Text Box with in the Shadow DOM", () => {
    cy.get('fieldset>button').click()   //click to open the shadowDOM
    cy.get('div[id="shadowHost"]')  //shadowHost
      .shadow() //shadow root
      .find('input[id="name"]') //element
      .type("NG")
      .should("have.value", "NG");
  });

  it.only('Config includeShadowDOM equal to true as an option', () => {
    cy.get('fieldset>button').click()
    cy.get('h2', {includeShadowDom: true})
    .contains('I belong to Shadow DOM').should('be.visible')
    cy.get('input[id="name"]', {includeShadowDom: true}) //element
    .type("NG")
    .should("have.value", "NG")
  })//{includeShadowDom: true} we wrote this at spec level,
  //we can also write at project level-cypress.json
  
});
