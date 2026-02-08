export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  displayPrice: string;
  image?: string;
  badge?: string;
  category: 'pastry' | 'coffee';
}

export const pastries: MenuItem[] = [
  {
    id: 'p1',
    name: "The Holy Cannoli",
    description: "Crispy shell, sweet ricotta, pistachios.",
    price: 5.00,
    displayPrice: "$5.00",
    badge: "Best Seller",
    category: 'pastry',
    image: "https://loremflickr.com/800/1200/cannoli,pastry/all?lock=99"
  },
  {
    id: 'p2',
    name: "Bomboloni",
    description: "Fluffy doughnut rolled in sugar.",
    price: 4.50,
    displayPrice: "$4.50",
    category: 'pastry',
    image: "https://loremflickr.com/800/1200/doughnut,sugar/all?lock=100"
  },
  {
    id: 'p3',
    name: "Sfogliatella",
    description: "The lobster tail. Crunchy layers.",
    price: 4.00,
    displayPrice: "$4.00",
    category: 'pastry',
    image: "https://loremflickr.com/800/1200/pastry,layer/all?lock=101"
  },
  {
    id: 'p4',
    name: "Tiramisu Cup",
    description: "Espresso, mascarpone, cocoa dust.",
    price: 6.50,
    displayPrice: "$6.50",
    category: 'pastry',
    image: "https://loremflickr.com/800/1200/tiramisu,dessert/all?lock=102"
  }
];

export const coffee: MenuItem[] = [
  { 
    id: 'c1', 
    name: "Espresso", 
    price: 2.50, 
    displayPrice: "$2.50",
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 'c2', 
    name: "Cappuccino", 
    price: 4.00, 
    displayPrice: "$4.00",
    badge: "Best Seller",
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 'c3', 
    name: "Freddo Espresso", 
    price: 3.50, 
    displayPrice: "$3.50",
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop"
  },
  { 
    id: 'c4', 
    name: "Latte Macchiato", 
    price: 4.50, 
    displayPrice: "$4.50",
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1570968995847-a3424d1a0300?q=80&w=800&auto=format&fit=crop"
  },
];

export const allItems = [...pastries, ...coffee];