describe("Working with Task Commands", function() {
  before(() => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get("input[type=email]").type("nigup16@gmail.com");
    cy.get("input[type=password]").type("password");
    cy.get("button[type=submit]").click();
  });

  it("Task with no Param", () => {
    cy.task("noparam").then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

  it("Task with single Param", () => {
    cy.task("singleParam", "Hello World").then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

  it("Task with multiple Params", () => {
    cy.task("multipleParam", { name: "Nitya", age: 34 }).then((txt) => {
      expect(txt).to.eq("OK");
    });
  });

//   it("Task-Excel To Json", () => {
//     cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
//     const excelFilePath =
//       "/Users/nityanandgupta/cypressConcepts/cypress/fixtures/login.xlsx";
//     const sheetName = "loginfile";
//     cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
//       (user) => {
//         login.Email.type(user.email);
//         login.Password.type(user.password);
//       }
//     );
//     login.SubmitButton.click();
//     cy.contains("No articles are here... yet").should("be.visible");
//   });
  

});
