import { Review } from '../types';

export const REVIEWS_SUMMARY = {
  averageRating: 4.3,
  totalReviews: 1923,
  categories: [
    { label: 'Signature Milo', rating: 4.9, count: 864 },
    { label: 'Late-Night Atmosphere', rating: 4.8, count: 620 },
    { label: 'Burgers & Fries', rating: 4.5, count: 532 },
    { label: 'Service & Quick Pickup', rating: 4.6, count: 410 },
  ]
};

export const REVIEWS_LIST: Review[] = [
  {
    id: 'rev-1',
    author: 'Aravind Swaminathan',
    rating: 5,
    date: '2 days ago',
    comment: 'Cold Milo is my all time favourite. Worth for money! The thick malt layer on top is simply unmatchable anywhere else in Chennai. 10/10.',
    tag: 'Milo Fanatic',
    avatarBg: '#075C3B',
    source: 'Google'
  },
  {
    id: 'rev-2',
    author: 'Deepika Ramanathan',
    rating: 5,
    date: '1 week ago',
    comment: 'The Milo is to die for — rich, creamy and amazing. Also ordered the Peri Peri Fries and Chicken Cheese Burger at 1:30 AM. Super fresh and steaming hot!',
    tag: 'Late Night Explorer',
    avatarBg: '#D6B34A',
    source: 'Google'
  },
  {
    id: 'rev-3',
    author: 'Karthik Raja',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Open all night. We tried Cold Milo, their signature drink, and it was superb. Great hangout vibes in TTK Road with energetic music and quick service.',
    tag: 'Verified Diner',
    avatarBg: '#043C2A',
    source: 'Google'
  },
  {
    id: 'rev-4',
    author: 'Sanjana Krishnamoorthy',
    rating: 4,
    date: '1 month ago',
    comment: 'Kosmo has become our midnight ritual after long study sessions or drives. Biscoff Thickshake and Korean Fried Chicken are out of this world.',
    tag: 'Regular Patron',
    avatarBg: '#6B4328',
    source: 'Google'
  },
  {
    id: 'rev-5',
    author: 'Mohammed Faheem',
    rating: 5,
    date: '1 month ago',
    comment: 'Best quick bites cafe in Alwarpet. Parking is convenient outside, the drive-through pickup is snappy, and that green-and-gold aesthetic looks royal.',
    tag: 'Drive-Through Pickup',
    avatarBg: '#087044',
    source: 'Google'
  },
  {
    id: 'rev-6',
    author: 'Nivetha Sundar',
    rating: 5,
    date: '2 months ago',
    comment: 'Spicy Garlic Bread + Cold Milo Volcano combo is heavenly. Staff is super hospitable even at 2 AM on busy weekends!',
    tag: 'Foodie',
    avatarBg: '#D6B34A',
    source: 'Google'
  }
];
