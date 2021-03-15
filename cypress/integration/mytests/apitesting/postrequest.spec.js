describe('Post request examples for API', function () {
    it('Post request', function () {
      cy.request('POST', 'https://reqres.in/api/users', {
        name: "morpheus",
        job: "leader"
      }).then(function (response) {
        expect(response.status).to.equals(201);
        expect(response.body).to.have.property('name', 'morpheus');
        expect(response.body).to.have.property('job', 'leader');
        expect(response.body).to.have.property('id'); //true
  
        expect(response.body).to.have.property('createdAt');
        expect(response.headers).to.have.property('content-type');
      });
    }); //Payload is always written in Javascript
    //we can write the post request in another way also, 
    //next it block is the example but remember to use the javascript concept
  
    it('Post request', function () {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: "morpheus",
          job: "leader"
        },
        headers: {
          content_type: "application/json"
        }
      }).then(function (response) {
        expect(response.status).to.equals(201);
        expect(response.body).to.have.property('name', 'morpheus');
        expect(response.body).to.have.property('job', 'leader');
        expect(response.body).to.have.property('id'); //true
  
        expect(response.body).to.have.property('createdAt');
        expect(response.headers).to.have.property('content-type');
      });
    }); //header parameter is an optional in payload
});
  