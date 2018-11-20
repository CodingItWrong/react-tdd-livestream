describe("adding a restaurant", () => {
  it("displays the restaurant in the list", () => {
    const initialRestaurantName = "Spaghetti Place";
    const restaurantName = "Sushi Place";

    setUpInitialRestaurant(initialRestaurantName, restaurantName);

    cy.visit("http://localhost:1234");

    restaurantsFromServerDisplayedAtStart(initialRestaurantName);
    modalNotShownAtTheStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalClearsOutValidationErrorsWhenClosed();
    modalAllowsAddingRestaurant(restaurantName);
  });

  function setUpInitialRestaurant(initialRestaurantName, addedRestaurantName) {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/restaurants',
      response: {
        data: [
          {
            type: 'restaurants',
            id: '1',
            attributes: {
              name: initialRestaurantName,
            },
          },
        ],
      },
    });

    cy.route({
      method: 'POST',
      url: '/restaurants',
      response: {
        data: {
          type: 'restaurants',
          id: '2',
          attributes: {
            name: addedRestaurantName,
          },
        },
      },
    });
  }

  function restaurantsFromServerDisplayedAtStart(restaurantName) {
    cy.contains(restaurantName);
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalCanBeCancelled() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalClearsOutValidationErrorsWhenClosed() {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("not.be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantName);
  }
});
