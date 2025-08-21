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

  async checkoutButton() {
    await this.checkoutBtn.click();
  }
  async checkout(firstName, lastName, zipCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.zipCodeInput.setValue(zipCode);
  }
  async verifyFormValues(first, last, zip) {
    await expect(this.firstNameInput).toHaveValue(first);
    await expect(this.lastNameInput).toHaveValue(last);
    await expect(this.zipCodeInput).toHaveValue(zip);
  }
}
export default new CheckoutForm();
