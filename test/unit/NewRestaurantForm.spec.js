import React from 'react';
import { render, wait, fireEvent, cleanup } from 'react-testing-library';
import NewRestaurantForm from 'components/RestaurantListPage/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let getByTestId;

    beforeEach(() => {
      saveHandler = jest.fn();

      ({ getByTestId } = render(<NewRestaurantForm onSave={saveHandler} />));

      fireEvent.change(
        getByTestId('newRestaurantName'),
        {
          target: {
            id: 'restaurantName',
            value: 'Sushi Place',
          },
        },
      );

      fireEvent.click(getByTestId('saveNewRestaurantButton'));
      return wait();
    });

    afterEach(cleanup);

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });

    it('clears the text field', () => {
      expect(getByTestId('newRestaurantName').value).toEqual('');
    });
  });
});
