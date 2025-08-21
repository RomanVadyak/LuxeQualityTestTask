class ItemPrice {
  get firstItemPrice() {
    return $(
      "//*[@class='inventory_item'][.//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_price']"
    );
  }
  get secondItemPrice() {
    return $(
      "//*[@class='inventory_item'][.//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_price']"
    );
  }
  get firstItemCheckoutPrice() {
    return $(
      "//*[@class='cart_item_label'][.//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_price']"
    );
  }
  get secondItemCheckoutPrice() {
    return $(
      "//*[@class='cart_item_label'][.//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_price']"
    );
  }
  get itemTotal() {
    return $(".summary_subtotal_label");
  }
  get taxLabel() {
    return $(".summary_tax_label");
  }
  get totalPrice() {
    return $(".summary_total_label");
  }

  async _text(el) {
    return (await el.getText()).trim();
  }
  async _priceFrom(el) {
    const t = await this._text(el);
    return parseFloat(t.replace("$", ""));
  }
  async firstItemPriceText() {
    return this._text(this.firstItemPrice);
  }
  async secondItemPriceText() {
    return this._text(this.secondItemPrice);
  }
  async firstItemPriceValue() {
    return this._priceFrom(this.firstItemPrice);
  }
  async secondItemPriceValue() {
    return this._priceFrom(this.secondItemPrice);
  }

  async firstItemCheckoutPriceText() {
    return this._text(this.firstItemCheckoutPrice);
  }
  async secondItemCheckoutPriceText() {
    return this._text(this.secondItemCheckoutPrice);
  }
  async firstItemCheckoutPriceValue() {
    return this._priceFrom(this.firstItemCheckoutPrice);
  }
  async secondItemCheckoutPriceValue() {
    return this._priceFrom(this.secondItemCheckoutPrice);
  }

  async itemTotalValue() {
    const t = await this._text(this.itemTotal);
    return parseFloat(t.replace("Item total: $", ""));
  }
  async taxValue() {
    const t = await this._text(this.taxLabel);
    return parseFloat(t.replace("Tax: $", ""));
  }
  async totalValue() {
    const t = await this._text(this.totalPrice);
    return parseFloat(t.replace("Total: $", ""));
  }
}
export default new ItemPrice();
