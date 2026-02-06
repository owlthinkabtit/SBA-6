import { calculateDiscount } from "../utils/discountCalculator.js";
export class Product {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.category = data.category;
        this.description = data.description;
        this.discountPercentage = data.discountPercentage || 0;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: ${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Description: ${this.description}`);
    }
    getPriceWithDiscount() {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
}
