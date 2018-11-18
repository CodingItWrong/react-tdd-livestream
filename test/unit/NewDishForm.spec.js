import React from 'react';
import { render, wait, fireEvent, cleanup } from 'react-testing-library';
import NewDishForm from '../../src/NewDishForm';

describe('NewDishForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let getByTestId;

    beforeEach(() => {
      saveHandler = jest.fn();

      ({ getByTestId } = render(<NewDishForm onSave={saveHandler} />));

      fireEvent.change(
        getByTestId('newDishName'),
        {
          target: {
            id: 'dishName',
            value: 'Volcano Roll',
          },
        },
      );

      fireEvent.click(getByTestId('saveNewDishButton'));
      return wait();
    });

    afterEach(cleanup);

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Volcano Roll');
    });
  });
});
