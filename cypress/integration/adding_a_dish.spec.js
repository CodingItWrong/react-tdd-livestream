describe('adding a dish', () => {
  it('displays the dish in the list', () => {
    const restaurantName = 'Sushi Place';
    const dishName = 'Volcano Roll';

    const restaurantName2 = 'Burger Place';
    const dishName2 = 'Mega Burger';

    cy.visit("http://localhost:1234");

    addRestaurant(restaurantName);
    goToRestaurantPage(restaurantName);
    modalNotShownAtTheStart();
    modalAllowsAddingDish(dishName);
    dishesRetainedWhenLeavingPage(restaurantName, dishName);
    dishesStoredPerRestaurant(restaurantName2, dishName, dishName2);
  });

  function addRestaurant(restaurantName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
  }

  function goToRestaurantPage(restaurantName) {
    cy.contains(restaurantName).click();
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
  }

  function modalAllowsAddingDish(dishName) {
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.get('[data-testid="newDishName"]').should("not.be.visible");
    cy.contains(dishName);
  }

  function dishesRetainedWhenLeavingPage(restaurantName, dishName) {
    cy.get('[data-testid="backButton"]').click();
    cy.contains(restaurantName).click();
    cy.contains(dishName);
    cy.get('[data-testid="backButton"]').click();
  }

  function dishesStoredPerRestaurant(restaurantName, absentDishName, dishName) {
    cy.get('[data-testid="addRestaurantButton"]').click();
    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);
    cy.get('[data-testid="saveNewRestaurantButton"]').click();
    cy.contains(restaurantName).click();
    cy.contains(absentDishName).should('not.exist');
    cy.get('[data-testid="addDishButton"]').click();
    cy.get('[data-testid="newDishName"]').type(dishName);
    cy.get('[data-testid="saveNewDishButton"]').click();
    cy.contains(dishName);
    cy.get('[data-testid="backButton"]').click();
  }
});
