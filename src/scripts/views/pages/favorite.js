import favoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
    <div id="main-content" class="main-content__container">
      <h2 tabindex="0" class="main-content__title">Favorite</h2>
      <div class="explore-restaurant" id="explore-restaurant"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await favoriteRestaurantIdb.getAllRestaurant();
    const containerRestaurant = document.querySelector('#explore-restaurant');
    if (restaurant.length) {
      restaurant.forEach((sedapmantap) => {
        containerRestaurant.innerHTML += createRestaurantItemTemplate(sedapmantap);
      });
    } else {
        containerRestaurant.innerHTML = '<div id="no-favorite"><h3>Belum ada Restaurant yang di sukai</h3></div>';
        }
  },
};

export default favorite;
