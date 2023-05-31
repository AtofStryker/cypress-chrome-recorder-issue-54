describe("cypress_recorder", () => {
  it("tests cypress_recorder", () => {
    cy.viewport(1792, 512);
    cy.visit("chrome://new-tab-page/");
    cy.visit("https://www.cypress.io/");
    cy.get("main astro-slot").click();
  });
});
//# recorderSourceMap=BCBDBEBFB
