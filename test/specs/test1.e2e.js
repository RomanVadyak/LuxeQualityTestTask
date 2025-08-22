import loginPage from "../pages/login.page";
import inventoryPage from "../pages/inventory.page";
import checkoutForm from "../pages/checkout.page";
import finishPage from "../pages/finish.page";
import itemPrice from "../pages/itemPrices.page";
import titlePages from "../pages/titleNames.page";
import { generateUserData } from "../utils/faker";

describe("Swag Labs test suite", () => {
  beforeEach(async () => {
    await loginPage.open();
  });
  it("should log in with valid credentials", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    await titlePages.currentTitleName("Products");
    await titlePages.inventoryList();
  });

  it("should show error with invalid credentials", async () => {
    await loginPage.login("invalid_login", "invalid_pass");
    await loginPage.notValidLogin(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("should complete full shopping flow", async () => {
    const user = generateUserData();
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    const invBike = await itemPrice.firstItemPriceValue();
    const invJacket = await itemPrice.secondItemPriceValue();
    const expectedItemTotal = invBike + invJacket;

    await inventoryPage.cartItems();
    await expect(inventoryPage.cartBadge).toHaveText("2");
    await inventoryPage.openCart();
    await titlePages.expectUrlContains("/cart.html");
    await titlePages.currentTitleName("Your Cart");
    await inventoryPage.verifyItemsCount(2);

    await checkoutForm.checkoutButton();
    await titlePages.expectUrlContains("/checkout-step-one.html");
    await titlePages.currentTitleName("Checkout: Your Information");
    await checkoutForm.isCheckoutFormDisplayed();
    await checkoutForm.fillForm(user);
    await checkoutForm.verifyFormValues(user);

    await finishPage.continueButton();
    await titlePages.expectUrlContains("/checkout-step-two.html");
    await titlePages.currentTitleName("Checkout: Overview");

    const coBike = await itemPrice.firstItemCheckoutPriceValue();
    const coJacket = await itemPrice.secondItemCheckoutPriceValue();
    await expect(coBike).toBeCloseTo(invBike, 2);
    await expect(coJacket).toBeCloseTo(invJacket, 2);

    const itemTotal = await itemPrice.itemTotalValue();
    const tax = await itemPrice.taxValue();
    const total = await itemPrice.totalValue();

    await expect(itemTotal).toBeCloseTo(expectedItemTotal, 2);
    await expect(total).toBeCloseTo(itemTotal + tax, 2);

    await finishPage.finishButton();
    await titlePages.expectUrlContains("/checkout-complete.html");
    await titlePages.currentTitleName("Checkout: Complete!");
    await finishPage.completeMsg("Thank you for your order!");
    await finishPage.backToProdButton();
    await titlePages.expectUrlContains("/inventory.html");
    await titlePages.currentTitleName("Products");
    await titlePages.inventoryList();
    await expect(inventoryPage.cartBadge).not.toBeDisplayed();
  });
});
