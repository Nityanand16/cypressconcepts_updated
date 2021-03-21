describe('Document Test Suite Commands', () =>{

    before(()=>{
        cy.visit('#/login?_k=kzhyxx')
    })
    //---------------------------------------------------------
    it('Document Test Commands - Title Properties', ()=> {
        cy.document().should(doc=>{
            const titleText = doc.title
            expect(titleText).to.equal('Conduit')
        })
    })

    it('CY Test Commands - Title Properties', ()=> {
        //cy.title().should('eq', 'Conduit')
        //or
        cy.title().then((text) => {
            expect(text).to.equal('Conduit')
        })
    })
    //--------------------------------------------------

    it('Document Test Commands - Get Height & Width', () => {
        cy.document().should(doc => {
            const docObj = Cypress.$(doc)
            let docHeight = docObj.height()
            let docWidth = docObj.width()
            console.log('screen Height is ${docHeight}')    //660
            console.log('screen width is ${docWidth}')  //1000
        })
    })//It will display the Width & Height of the document

    it('CY Test Commands - set Viewport', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.viewport('iphone-xr', 'landscape')
        cy.viewport(1879, 1482)
    })
    //-----------------------

    it('Documnt Test Commands - Cookies', () => {
        cy.document().should(doc => {
            //Create Cookies
            doc.cookie = "username=Nitya"
            //Read Cookies
            console.log(doc.cookie)
            //Update Cookies
            doc.cookie = "username=Nitya1234"
            console.log(doc.cookie)
            //Clear Cookies
            doc.cookie = "username"
            console.log(doc.cookie)
        })
    })

    it.only('CY Test Commands for Documents - Cookies', () => {
        //Create Cookies
        cy.setCookie("user","Nitya")
        //Read Cookies
        cy.getCookie("user")
        //cy.getCookies() for more then one cookie
        //Update Cookies
        cy.setCookie("user","Nitya1234")
        cy.getCookie("user")
        //Clear Cookies
        cy.clearCookie("user")
        //cy.clearCookies() for more then one cookie
        cy.getCookie("user")    //As the cookie is cleared so there is no
        //cookie, it will not give any error but the outcome is null
    })








})