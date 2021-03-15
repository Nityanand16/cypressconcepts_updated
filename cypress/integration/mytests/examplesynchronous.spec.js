describe('example of asynchronous and synchronous', () =>{

    it('example of asynchronous',() =>{

        cy.visit('https://www.google.com')

        //cy.get('input[name = "q"]').type('python')    //fix the timeout error with the setTimout
        setTimeout(() => {
            cy.get('input[name = "q"]').type('python')
          }, 10000)
        //or
        //cy.get('input[name = "q"]',{timeout:10000}).type('python')

        cy.log('Hi cypress')
        console.log('Hi Javascript')
        //when we write the Javascript code(row13) it makes it asynchronous row13 will execute
        // before the row9 so in next test case by using then function we will convert it into synchronous

    })

    it.only('example of asynchronous',() =>{

        cy.visit('https://www.google.com')

        //cy.get('input[name = "q"]').type('python')    //fix the timeout error with the setTimout
        setTimeout(() => {
            cy.get('input[name = "q"]').type('python')
          }, 10000)

        cy.log('Hi cypress').then(() =>
        {console.log('Hi Javascript')
        })

    })


})
