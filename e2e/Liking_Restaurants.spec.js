const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('#explore-restaurant');
  I.see('Belum ada restaurant yang di sukai', '#explore-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang di sukai', '#explore-restaurant');

  I.amOnPage('/');

  I.seeElement('.list_item_title a');
  I.click(locate('.list_item_title a').first());

  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#explore-restaurant');
  const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang di sukai', '#explore-restaurant');

  I.amOnPage('/');

  I.seeElement('.list_item_title a');

  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  await I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');

  I.seeElement('h1.list_item_title');

  const likedRestaurantTitle = await I.grabTextFrom('h1.list_item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  await I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Belum ada restaurant yang di sukai', '#explore-restaurant');
});
