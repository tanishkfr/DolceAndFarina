export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  tags?: string[];
}

export interface CoffeeItem {
  id: string;
  name: string;
  priceSingle: string;
  priceDouble?: string;
}

export interface GelatoItem {
  id: string;
  name: string;
  description: string;
}