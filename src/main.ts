import { fetchProducts } from "./services/apiService.js";
import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError, AppError } from "./utils/errorHandler.js";

async function main() {
  try {
    const productsData = await fetchProducts();

    if (productsData.length === 0) {
      throw new AppError("No products were found in the API response.");
    }

    const firstProduct = new Product(productsData[0]!);
    firstProduct.displayDetails();

    const discountedPrice = firstProduct.getPriceWithDiscount();
    const taxAmount = calculateTax(discountedPrice, firstProduct.category);

    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    console.log(`Estimated Tax: $${taxAmount.toFixed(2)}`);
    console.log(`Total: $${(discountedPrice + taxAmount).toFixed(2)}`);
  }
  catch (error) {
    handleError(error);
  }
}

main();