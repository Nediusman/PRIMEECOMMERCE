import { electronicsProducts } from './electronics';
import { sportsProducts, beautyProducts } from './sportsBeauty';
import { kidsProducts, furnitureProducts } from './kidsFurniture';
import { jewelryProducts, foodProducts, booksProducts } from './jewelryFoodBooks';

export const extraProducts = [
  ...electronicsProducts,
  ...sportsProducts,
  ...beautyProducts,
  ...kidsProducts,
  ...furnitureProducts,
  ...jewelryProducts,
  ...foodProducts,
  ...booksProducts,
];
