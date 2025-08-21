import LoginPage from "../pages/login.page";
import AddToCart from "../pages/addToCart.page";
import CheckoutForm from "../pages/checkout.page";
import FinishPage from "../pages/finish.page";
import ItemPrice from "../pages/itemPrices.page";
import TitlePages from "../pages/titleNames.page";

describe("Swag Labs test suite", () => {
  beforeEach(async () => {
    await browser.url("https://www.saucedemo.com/");
  });

  describe("Login tests", () => {
    it("should log in with valid credentials", async () => {
      await LoginPage.login("standard_user", "secret_sauce");
      await TitlePages.currentTitleName("Products");
      await TitlePages.inventoryList();
    });

    it("should show error with invalid credentials", async () => {
      await LoginPage.login("unvalid_login", "unvalid_pass");
      await LoginPage.notValidLogin(
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });

  describe("Shopping and Checkout flow", () => {
    it("should complete full shopping flow", async () => {
      await browser.url("https://www.saucedemo.com/");
      await LoginPage.login("standard_user", "secret_sauce");

      const invBike = await ItemPrice.firstItemPriceValue();
      const invJacket = await ItemPrice.secondItemPriceValue();
      const expectedItemTotal = invBike + invJacket;

      await AddToCart.cartItems();
      await expect($(".shopping_cart_badge")).toBeDisplayed();
      await TitlePages.currentTitleName("Your Cart");

      await CheckoutForm.checkoutButton();
      await TitlePages.currentTitleName("Checkout: Your Information");
      await CheckoutForm.checkout("John", "Wick", "12345");
      await expect($(".checkout_info")).toBeDisplayed();
      await CheckoutForm.verifyFormValues("John", "Wick", "12345");

      await FinishPage.continueButton();
      await TitlePages.currentTitleName("Checkout: Overview");

      const coBike = await ItemPrice.firstItemCheckoutPriceValue();
      const coJacket = await ItemPrice.secondItemCheckoutPriceValue();
      expect(coBike).toBeCloseTo(invBike, 2);
      expect(coJacket).toBeCloseTo(invJacket, 2);

      const itemTotal = await ItemPrice.itemTotalValue();
      const tax = await ItemPrice.taxValue();
      const total = await ItemPrice.totalValue();

      expect(itemTotal).toBeCloseTo(expectedItemTotal, 2);
      expect(total).toBeCloseTo(itemTotal + tax, 2);

      await FinishPage.finishButton();
      await TitlePages.currentTitleName("Checkout: Complete!");
      await FinishPage.completeMsg("Thank you for your order!");
      await FinishPage.backToProdButton();
      await TitlePages.currentTitleName("Products");
      await TitlePages.inventoryList();
      await expect($(".shopping_cart_badge")).not.toBeDisplayed();
    });
  });
});
