import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (sedapmantap) => `
  <div tabindex="0" class="list_item">
    <img class="lokasi lazyload" data-src="${CONFIG.BASE_IMAGE_URL + sedapmantap.pictureId}" alt="${sedapmantap.name}" title="${sedapmantap.name}">
    <div class="city__name">${sedapmantap.city}</div>
    <div class="rating">
      <p>⭐️<span>${sedapmantap.rating}</span></p></div>
      <div class="main-content__container">
      <h1 class="list_item_title"><a href="${`#/detail/${sedapmantap.id}`}">${sedapmantap.name}</a></h1>
      <div class="description" >${sedapmantap.description}</div>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (sedapmantap) =>`
  <div class="Info">
    <div class="detailFicture">
      <img src="${CONFIG.BASE_IMAGE_URL + sedapmantap.pictureId}" alt="${sedapmantap.name}">
    </div>
    <div class="detailInfo">
      <h1 class="main-content__title">${sedapmantap.name}</h1>
      <h1>${sedapmantap.city},</h1>
      <h1>${sedapmantap.address}</h1>
      <p class="description">${sedapmantap.description}</p>
    </div>
  </div>

  <div class="Info2">
  <h2 class="main-content__title">Menu</h2>
    <div class="OtherInfo">
      <p class="infoCategories">
        Kategori: ${sedapmantap.categories.map((category) => `${category.name}`).join(' - ')}
      </p>
        <h3 class="main-content__title">Makanan :</h3>
        <ol>
          ${sedapmantap.menus.foods.map((menu) => `
            <li menuFood>${menu.name}</li>
          `).join('')}
        </ol>
        <h3 class="main-content__title">Minuman :</h3>
        <ol>
          ${sedapmantap.menus.drinks.map((menu) => `
            <li menuDrinks>${menu.name}</li>
          `).join('')}
        </ol>
    </div>

    <div class="reviewCust">
      <h2 class="main-content__title">Review</h2>
      ${sedapmantap.customerReviews.map((review) => `
        <div class="detailReview">
          <p class="customerReview">"${review.review}"</p>
          <p class="customerName">${review.name},</p>
          <p class="customerDate">${review.date}</p>
        </div>`).join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () =>`
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
