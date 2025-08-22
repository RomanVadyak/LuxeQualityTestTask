class InventoryPage {
  get firstItem() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }
  get secondItem() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }
  get shoppingCartLink() {
    return $(".shopping_cart_link");
  }
  get cartBadge() {
    return $(".shopping_cart_badge");
  }
  get cartItemsEl() {
    return $$(".cart_item");
  }
  async cartItems() {
    await this.firstItem.click();
    await this.secondItem.click();
  }
  async openCart() {
    await this.shoppingCartLink.click();
  }
  async verifyItemsCount(expectedCount) {
    const items = await this.cartItemsEl;
    await expect(items).toBeElementsArrayOfSize(expectedCount);
  }
}
export default new InventoryPage();
