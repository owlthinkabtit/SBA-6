//what products should have associated with them
//id, title, price, category, discount%?
export interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  discountPercentage: number;


}

export class Product {
  id: number;
  title: string;
  price: number;
  category: string;
  discountPercentage?: number;

  constructor(data: ProductData) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.category = data.category;
    this.discountPercentage = data.discountPercentage;
  }

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  getPriceWithDiscount(): number {
    if (!this.discountPercentage) {
      return this.price;
    }
    const discountAmount = this.price * (this.discountPercentage / 100);
    return this.price - discountAmount;
  }
}
