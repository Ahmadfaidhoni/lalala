import restaurantDbSource from '../../data/restaurantDb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="main-content" class="main-content__container">
      <h2 tabindex="0" class="main-content__title">Explore Restaurant</h2>
      <div class="explore-restaurant" id="explore-restaurant"></div>
    </div>`;
    },

  async afterRender() {
    const restaurant = await restaurantDbSource.listRestaurant();
    const containerRestaurant = document.querySelector('#explore-restaurant');
    restaurant.forEach((sedapmantap) => {
      containerRestaurant.innerHTML += createRestaurantItemTemplate(sedapmantap);
    });
  },
};

export default Home;
