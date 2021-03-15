describe('file upload in cypress', () =>{

    it('single file upload case', ()=>{

        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const fixturefilepath = 'image1.png';
        cy.get('#fileUpload').attachFile(fixturefilepath); //it is attaching the file from fixtures attachFile is a method
        //which is coming as we installed and in support->command file we import 'cypress-file-upload'; so we can call
        
        // setTimeout(() => {
        //     cy.get('.filename').should('be.a','string')
        // }, 20000);
        
        cy.get('.filename').should('contain','.png');   //assertion
        
    })

    it('drag and drop file upload case', ()=>{

        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')

        cy.get('#file').attachFile('image1.png');
        
        cy.get(".box__success").should('contain','Done!');  //assertion
        cy.get(".box__restart").should('contain','Upload more?');   //assertion
        
    })

    it('multiple files upload case', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile(['image1.png','image2.jpeg','example.json']);

        cy.get('#fileList').should('contain','.png'||'.jpeg'||'.json'); //assertion
        cy.get('#fileList').should('contain','.png'&&'.jpeg'&&'.json'); //assertion
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected');  //assertion

    })

    it('replace the file while uploading case', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile('image1.png');
        cy.get('#filesToUpload').attachFile('image2.jpeg');
        cy.get('#filesToUpload').attachFile('image2.jpeg');
        
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected');  //assertion 

    })

    it.only('rename the file file while uploading case', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        cy.get('#filesToUpload').attachFile({filePath: 'image1.png', fileName: 'showrename.json'});

        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected');  //assertion

    })

})



