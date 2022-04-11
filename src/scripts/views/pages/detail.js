import restaurantDbSource from '../../data/restaurantDb-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
        <div id="main-content" class="main-content__container">
            <h2 class="main-content__title">Detail</h2>
            <div class="detail" id="detail"></div>
        </div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await restaurantDbSource.detailRestaurant(url.id);
        const containerRestaurant = document.querySelector('#detail');
        containerRestaurant.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurant: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                city: restaurant.city,
                rating: restaurant.rating,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
                backdrop_path: CONFIG.BASE_IMAGE_URL,
            },
        });
    },
};

export default Detail;
