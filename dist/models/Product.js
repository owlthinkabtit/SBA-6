import { calculateDiscount } from "../utils/discountCalculator.js";
export class Product {
    id;
    title;
    price;
    discountPercentage;
    category;
    description;
    constructor(id, title, price, discountPercentage, category, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.description = description;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: ${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Description: ${this.description}`);
    }
    getPricedWithDiscount() {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount;
    }
}
