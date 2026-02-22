export let products = [];

export async function loadProductsFetch() {
  if (products.length > 0) {
    return products;
  }

  const response = await fetch("../backend/products.json");

  if (!response.ok) {
    throw new Error(`Failed to load products: ${response.status}`);
  }

  products = await response.json();
  return products;
}

export function getProduct(productId) {
  return products.find((product) => product.id === productId);
}
