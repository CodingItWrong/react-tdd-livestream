describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const restaurantName = "Sushi Place";

    cy.visit("http://localhost:1234");

    modalNotShownAtTheStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalClearsOutValidationErrorsWhenClosed();
    modalAllowsAddingRestaurant(restaurantName);
  });

  function modalNotShownAtTheStart() {
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");
  }

  function modalCanBeCancelled() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="addRestaurantModal"] button.modal-close').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");

    cy.get('[data-test="cancelAddRestaurantButton"]').click();
  }

  function modalClearsOutValidationErrorsWhenClosed() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="cancelAddRestaurantButton"]').click();

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("not.be.visible");

    cy.get('[data-test="cancelAddRestaurantButton"]').click();
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  }
});
