class FinishPage {
  get continueBtn() {
    return $("#continue");
  }
  get finishBtn() {
    return $("#finish");
  }
  get backToProductsBtn() {
    return $("#back-to-products");
  }
  get orderMsg() {
    return $(".complete-header");
  }

  async continueButton() {
    await this.continueBtn.click();
  }
  async completeMsg(msg) {
    await expect(this.orderMsg).toHaveText(msg);
  }
  async finishButton() {
    await this.finishBtn.click();
  }
  async backToProdButton() {
    await this.backToProductsBtn.click();
  }
}

export default new FinishPage();
