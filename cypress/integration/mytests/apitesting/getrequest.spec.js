describe('GET API for Rest', function () {
  it('GET Request for body with single data', function () {
    cy.request('GET', 'https://reqres.in/api/users/2').then(function (resp) {
      //response of the above api request is stored in resp
      expect(resp.status).equal(200);
      expect(resp.body.data).has.property('id', 2);
      expect(resp.body.data).has.property("first_name", "Janet");
    });
  });
  it('GET Request for body with multiple data with path parameter', function () {
    cy.request('https://reqres.in/api/unknown').then(function (resp) {
      //or
      //cy.request('GET','https://reqres.in/api/unknown').then((resp) =>{
      expect(resp.status).equal(200);
      expect(resp.body.data[0]).has.property('id', 1);
      expect(resp.body.data[1]).has.property("name", "fuchsia rose");
      expect(resp.body.data).has.length(6);
      expect(resp.body.data[0]).have.not.property('last name');
    });
  });
  it('GET Request for body with multiple data with query parameter', function () {
    cy.request('https://reqres.in/api/users?page=2').then(function (resp) {
      //response of the above api request is stored in resp
      expect(resp.status).equal(200);
      expect(resp.body.data[0]).has.property('id', 7);
      expect(resp.body.data[1]).has.property("email", "lindsay.ferguson@reqres.in");
      expect(resp.body.data).has.length(6);
      expect(resp.body.data[0]).have.not.property('address');
    });
  });
}); //data is stored in array with the name data
//note: first check the response in



