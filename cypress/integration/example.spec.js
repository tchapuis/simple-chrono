// https://docs.cypress.io/api/introduction/api.html

describe("Le chrono fonctionne bien ?", () => {
  it("visits the app root url", () => {
    cy.visit("/simple-chrono/");
    cy.get("#timer").contains("00:00");
  });

  it("play the timer", () => {
    cy.visit("/");
    cy.get("#play-button").click();
    cy.get("#timer").should("have.class", "text-green-500");
    cy.get("#timer").should("not.have.value", "00:00");
  });

  it("pause the timer", () => {
    cy.visit("/");
    cy.get("#play-button").click();
    cy.wait(1000);
    cy.get("#pause-button").click();
    cy.get("#timer").should("have.class", "text-red-500");
  });

  it("reset the timer", () => {
    cy.visit("/");
    cy.get("#play-button").click();
    cy.get("#reset-button").click();
    cy.get("#timer").should("not.have.class", "text-green-500");
    cy.get("#timer").should("not.have.class", "text-red-500");
    cy.get("#timer").should("have.value", "00:00");
  });
});
