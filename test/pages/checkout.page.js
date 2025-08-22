class CheckoutForm {
  get checkoutBtn() {
    return $("#checkout");
  }
  get firstNameInput() {
    return $("#first-name");
  }
  get lastNameInput() {
    return $("#last-name");
  }
  get zipCodeInput() {
    return $("#postal-code");
  }
  get checkoutFormInputs() {
    return $(".checkout_info");
  }

  async checkoutButton() {
    await this.checkoutBtn.click();
  }
  async isCheckoutFormDisplayed() {
    await expect(this.checkoutFormInputs).toBeDisplayed();
  }
  async fillForm({ firstName, lastName, zipCode }) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.zipCodeInput.setValue(zipCode);
  }
  async verifyFormValues(user) {
    expect(await this.firstNameInput.getValue()).toEqual(user.firstName);
    expect(await this.lastNameInput.getValue()).toEqual(user.lastName);
    expect(await this.zipCodeInput.getValue()).toEqual(user.zipCode);
  }
}
export default new CheckoutForm();
