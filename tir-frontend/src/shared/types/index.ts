export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'partner';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
