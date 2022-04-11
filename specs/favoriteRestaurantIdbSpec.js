import favoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('favorite restaurant idb contract test implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await favoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurantIdb);
});
