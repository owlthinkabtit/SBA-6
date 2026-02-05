import { calculateDiscount} from "../utils/discountCalculator.js";


export class Product {
  public id: number;
  public title: string;
  public price: number;
  public discountPercentage: number;
  public category: string;
  public description: string;

  constructor(
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    category: string,
    description: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    this.description = description;

  }

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: ${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Description: ${this.description}`);
  
  }

  getPricedWithDiscount(): number {
    const discountAmount = calculateDiscount(
      this.price,
      this.discountPercentage
    );
    return this.price - discountAmount;
  }

}
