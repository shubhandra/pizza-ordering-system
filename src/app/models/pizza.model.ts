export class Pizza {
  name: string;
  size: string;
  price: number;
  qty: number;
  toppings: string;
  selectedSize: string;
  selectedTopping: string;

  constructor(name, size, price, qty, toppings, selectedSize, selectedTopping) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.qty = qty;
    this.toppings = toppings;
    this.selectedSize = selectedSize;
    this.selectedTopping = selectedTopping;
  }
}
