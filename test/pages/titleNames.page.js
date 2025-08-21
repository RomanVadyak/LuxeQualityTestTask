class TitlePages {
  get titleName() {
    return $(".title");
  }
  get inventory() {
    return $(".inventory_list");
  }
  async currentTitleName(title) {
    await expect(this.titleName).toHaveText(title);
  }
  async inventoryList() {
    await expect(this.inventory).toBeDisplayed();
  }
}
export default new TitlePages();
