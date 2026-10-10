export interface Room {
  id: string;
  name: string;
  tagline: string;
  image: string;
  pricePerNight: number;
  capacity: string;
  bedType: string;
  roomSize: string;
  description: string;
  features: string[];
  category: 'single' | 'queen' | 'king' | 'family';
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface Attraction {
  name: string;
  category: string;
  distance: string;
  driveTime: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'lobby' | 'exterior';
  image: string;
  caption: string;
}

export interface BookingInquiry {
  guestName: string;
  email: string;
  phone: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  message: string;
}
