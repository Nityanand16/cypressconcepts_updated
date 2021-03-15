describe('different types of hooks', ()=>{

  before(()=>{
    cy.log('I will run in starting of the test suite')
  })

  beforeEach(()=>{
    cy.log('I will run in starting of each test case')

  })

  afterEach(()=>{
    cy.log('I will run after each test case')

  })

  after(()=>{
    cy.log('I will run at the end of test suite')

  })

  it('open facebook.com', ()=>{

    cy.log('https://facebook.com')

  })

  it('open google.com', ()=>{

    cy.log('https://google.com')

  })


})
