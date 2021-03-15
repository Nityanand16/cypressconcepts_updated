describe('api testing', function () {
    var namerandom = Math.random().toString() + "abc";
    var jobrandom = Math.random().toString() + "job";
    it('Put request', function () {
      cy.log(namerandom);
      cy.log(jobrandom);
      cy.request('PUT', 'https://reqres.in/api/users', {
        name: namerandom,
        job: jobrandom
      }).then(function (response) {
        expect(response.status).to.equals(200);
        expect(response.body).to.have.property('name', namerandom);
        expect(response.body).to.have.property('job', jobrandom);
        expect(response.headers).to.have.property('content-type');
      });
    });
});
  