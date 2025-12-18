export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Sourdough' | 'Sweet' | 'Savory' | 'Coffee';
  image: string;
  tags?: string[];
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}