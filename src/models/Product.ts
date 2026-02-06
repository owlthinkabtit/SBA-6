import { calculateDiscount} from "../utils/discountCalculator.js";

export interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  discountPercentage?: number;
}

export class Product {
  public id: number;
  public title: string;
  public price: number;
  public category: string;
  public description: string;
  public discountPercentage: number;

  constructor(data: ProductData) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.category = data.category;
    this.description = data.description;
    this.discountPercentage = data.discountPercentage || 0;
  }

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: ${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Description: ${this.description}`);
  
  }

  getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage
    );
    return this.price - discountAmount;
  }

}
