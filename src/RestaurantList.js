import React from 'react';
import { dataURLToBlob } from 'blob-util';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const RestaurantList = ({ restaurantNames }) => (
  <Collection>
    {
      restaurantNames.map(restaurantName => (
        <CollectionItem key={restaurantName}>
          {restaurantName}
        </CollectionItem>
      ))
    }
  </Collection>
);

export default RestaurantList;
