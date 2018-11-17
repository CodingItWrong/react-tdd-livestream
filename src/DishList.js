import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const DishList = ({ dishNames }) => (
  <Collection header="Dishes">
    <DishItems dishNames={dishNames} />
  </Collection>
);

const DishItems = ({ dishNames }) => (
  dishNames.length === 0
    ? <NoDishItems />
    : <SomeDishItems dishNames={dishNames} />
);

const NoDishItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    (none added yet)
  </CollectionItem>
);

const SomeDishItems = ({ dishNames }) => (
  dishNames.map(dishName => (
    <CollectionItem key={dishName}>
      {dishName}
    </CollectionItem>
  ))
);

export default DishList;
