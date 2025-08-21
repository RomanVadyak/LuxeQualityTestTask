class AddToCart {
  get firstItem() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  get secondItem() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get shoppingCartLink() {
    return $(".shopping_cart_link");
  }
  async cartItems() {
    await this.firstItem.click();
    await this.secondItem.click();
    await this.shoppingCartLink.click();
  }
}
export default new AddToCart();
