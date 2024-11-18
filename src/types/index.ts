export interface Store {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  products: Product[];
  modelUrl?: string;
  isRegistered: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  modelUrl?: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin' | 'store_owner';
}