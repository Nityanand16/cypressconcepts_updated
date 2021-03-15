describe('GET API request with alias', function () {
    beforeEach(function () {
      cy.request('/users?page=2').as('getapi');
    });
    it('validate the header info', function () {
      cy.get('@getapi').its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
    }); //We can store the base url("baseUrl": "https://reqres.in/api) in cypress.json file
    //so in row 5 we can use the resource and parameter
    //note: we can make alias by using as method
  
    it('validate the status code', function () {
      cy.get('@getapi').its('status').should('eq', 200);
    });
    it('validate the header info', function () {
      cy.get('@getapi').its('body').its('data').its(length).should('eq', 6);
    });
  });
  