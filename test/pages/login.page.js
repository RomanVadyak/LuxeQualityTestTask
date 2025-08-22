class LoginPage {
  get usernameTextbox() {
    return $("#user-name");
  }
  get passwordTextbox() {
    return $("#password");
  }
  get loginBtn() {
    return $("#login-button");
  }
  get errorMsg() {
    return $("h3");
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.usernameTextbox.setValue(username);
    await this.passwordTextbox.setValue(password);
    await this.loginBtn.click();
  }
  async notValidLogin(msg) {
    await expect(this.errorMsg).toHaveText(msg);
  }
}
export default new LoginPage();
