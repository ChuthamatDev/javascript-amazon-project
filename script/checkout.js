import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";

loadProductsFetch().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
}).catch(() => {
  document.querySelector(".js-order-summary").innerHTML =
    "<p>Unable to load checkout products.</p>";
  document.querySelector(".js-payment-summary").innerHTML = "";
});
