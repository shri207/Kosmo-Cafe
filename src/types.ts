export type MenuCategory = 
  | 'ALL'
  | 'MILO_SPECIALS'
  | 'BEVERAGES'
  | 'VEGETARIAN'
  | 'NON_VEGETARIAN'
  | 'HOT_COLD_DRINKS';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSignature?: boolean;
  isLateNightSpecial?: boolean;
  tags?: string[];
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'None';
  ingredients?: string[];
  calories?: string;
  pairWith?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  avatarBg: string;
  source: 'Google' | 'Zomato';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Atmosphere' | 'Drinks' | 'Comfort Food' | 'Nightlife';
  image: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  description?: string;
}

export interface TableInquiry {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor AC' | 'Outdoor Garden Lights' | 'Curbside Drive-Through Pickup';
  notes?: string;
}
