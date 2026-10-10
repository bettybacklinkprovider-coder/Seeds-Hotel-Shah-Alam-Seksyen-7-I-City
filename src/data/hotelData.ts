import { Room, Amenity, Attraction, GalleryItem } from '../types/hotel';

// Real generated high-fidelity photography
import exteriorImg from '../assets/images/seeds_hotel_exterior_1791632974324.jpg';
import deluxeRoomImg from '../assets/images/seeds_hotel_deluxe_room_1791632992080.jpg';
import twinRoomImg from '../assets/images/seeds_hotel_twin_room_1791633007606.jpg';
import familySuiteImg from '../assets/images/seeds_hotel_family_suite_1791633020873.jpg';
import lobbyReceptionImg from '../assets/images/seeds_hotel_lobby_reception_1791633037252.jpg';

// Verified amenity photography
import amenityHotShowerImg from '../assets/images/amenity_hot_shower_bathroom_1791634094335.jpg';
import amenityAirConditioningImg from '../assets/images/amenity_air_conditioning_1791634111349.jpg';
import amenitySmartTvImg from '../assets/images/amenity_smart_tv_entertainment_1791634125377.jpg';
import amenityTowelsImg from '../assets/images/amenity_towels_toiletries_1791634143738.jpg';
import amenityKeycardImg from '../assets/images/amenity_keycard_access_1791634155907.jpg';

// Malaysian attractions photography
import attractionICityImg from '../assets/images/attraction_icity_light_park_1791634230746.jpg';
import attractionBlueMosqueImg from '../assets/images/attraction_blue_mosque_1791634242881.jpg';

export const HOTEL_INFO = {
  name: "Seeds Hotel Shah Alam Seksyen 7 I-City",
  shortName: "Seeds Hotel",
  address: "3, Jalan Kristal As7/As, Seksyen 7, 40000 Shah Alam, Selangor, Malaysia",
  phone: "+60178813439",
  phoneDisplay: "+60 17-881 3439",
  phoneRaw: "+60178813439",
  whatsappUrl: "https://wa.me/60178813439",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Seeds+Hotel+Shah+Alam+Seksyen+7+I-City,+3+Jalan+Kristal+As7/As,+Seksyen+7,+40000+Shah+Alam,+Selangor,+Malaysia",
  googleMapsEmbedQuery: "Seeds+Hotel+Shah+Alam+Seksyen+7+I-City",
  locationBadge: "Seksyen 7, Shah Alam · Selangor",
  checkInTime: "14:00 (2:00 PM)",
  checkOutTime: "12:00 (12:00 PM)",
  receptionHours: "24-Hour Front Desk Service",
  images: {
    exterior: exteriorImg,
    deluxeRoom: deluxeRoomImg,
    twinRoom: twinRoomImg,
    familySuite: familySuiteImg,
    lobby: lobbyReceptionImg,
  }
};

export const VERIFIED_ROOMS: Room[] = [
  {
    id: "standard-queen",
    name: "Standard Queen Room",
    tagline: "Intimate comfort tailored for couples or solo professionals",
    image: deluxeRoomImg,
    pricePerNight: 98,
    capacity: "2 Guests",
    bedType: "1 Queen Bed",
    roomSize: "16 m²",
    category: "queen",
    description: "A tranquil sanctuary featuring a plush Queen-size bed with crisp cotton linens, individual climate control, warm accent lighting, and a private attached bathroom with hot shower.",
    features: [
      "Plush Queen Bed with Premium Linens",
      "Private Attached Bathroom & Hot Shower",
      "Individual Split Air Conditioning",
      "High-Definition LED TV",
      "Complimentary High-Speed Wi-Fi",
      "Electric Kettle & Bottled Water",
      "Daily Housekeeping & Fresh Towels",
      "Key Card Security Entry"
    ]
  },
  {
    id: "superior-king",
    name: "Superior King Room",
    tagline: "Spacious elegance with king-sized rest and dedicated work space",
    image: deluxeRoomImg,
    pricePerNight: 120,
    capacity: "2 Guests",
    bedType: "1 King Bed",
    roomSize: "20 m²",
    category: "king",
    description: "Designed for guests seeking extra space and refined relaxation. Boasts an expansive King-size bed, workstation desk, bedside charging outlets, ambient cove lighting, and an en-suite hot shower.",
    features: [
      "Expansive King Bed with Luxury Pillows",
      "En-Suite Bathroom with Instant Hot Shower",
      "Quiet Split Unit Air Conditioning",
      "Flat-Screen TV with Digital Channels",
      "Fast & Stable Wi-Fi Connectivity",
      "Work Desk & Ambient Reading Lamps",
      "Electric Kettle with Coffee/Tea Set",
      "Electronic Door Key Card Access"
    ]
  },
  {
    id: "standard-twin",
    name: "Standard Twin Room",
    tagline: "Two single beds ideal for business colleagues, friends, or relatives",
    image: twinRoomImg,
    pricePerNight: 105,
    capacity: "2 Guests",
    bedType: "2 Single Beds",
    roomSize: "18 m²",
    category: "single",
    description: "Thoughtfully configured with two cozy single beds, dedicated reading lamps, luggage placement area, and a spotless private bathroom. Ideal for friends visiting I-City or conference attendees at UiTM.",
    features: [
      "Two Separate Comfortable Single Beds",
      "Private Attached Bathroom with Hot Shower",
      "Individual Air Conditioning Unit",
      "High-Speed Wireless Internet",
      "Flat-Screen TV",
      "Fresh Towels & Essential Toiletries",
      "Electric Kettle & Drinking Water",
      "Daily Room Cleaning"
    ]
  },
  {
    id: "family-suite",
    name: "Family Suite",
    tagline: "Generous layout accommodating family getaways or group visits",
    image: familySuiteImg,
    pricePerNight: 160,
    capacity: "3-4 Guests",
    bedType: "1 King Bed + 1 Single Bed",
    roomSize: "26 m²",
    category: "family",
    description: "Our premier family sanctuary provides ample space for up to four guests. Fitted with one King bed and one Single bed, generous floor plan, multiple charging stations, and full en-suite amenities.",
    features: [
      "1 King Bed + 1 Single Bed Setup",
      "Spacious Family Room Layout",
      "Private Bathroom with Continuous Hot Shower",
      "High-Power Air Conditioning",
      "Large Flat-Screen Smart LED TV",
      "High-Speed Wi-Fi for Multiple Devices",
      "Electric Kettle, Cups & Bottled Water",
      "Keycard Door Security Access"
    ]
  },
  {
    id: "standard-single",
    name: "Standard Single Room",
    tagline: "Compact, quiet, and spotless retreat for solo travelers & students",
    image: twinRoomImg,
    pricePerNight: 85,
    capacity: "1 Guest",
    bedType: "1 Single Bed",
    roomSize: "13 m²",
    category: "single",
    description: "Streamlined comfort crafted for the independent traveler, healthcare visitor, or student visiting UiTM. Clean lines, a comfortable single bed, private hot shower, and quiet air conditioning.",
    features: [
      "Single Bed with Fresh Linens",
      "Private Attached Bathroom & Hot Shower",
      "Individual Air Conditioning",
      "Complimentary Wi-Fi",
      "Flat-Screen LED TV",
      "Electric Kettle & Mineral Water",
      "Daily Housekeeping Service",
      "Secure Key Card Entry"
    ]
  }
];

export const VERIFIED_AMENITIES: Amenity[] = [
  {
    id: "wifi",
    name: "High-Speed Wi-Fi",
    description: "Complimentary wireless internet available in all guest rooms and reception areas.",
    iconName: "Wifi",
    image: deluxeRoomImg
  },
  {
    id: "ac",
    name: "Individual Air Conditioning",
    description: "Each room features its own quiet, adjustable split air conditioner for optimal comfort.",
    iconName: "Wind",
    image: amenityAirConditioningImg
  },
  {
    id: "shower",
    name: "Private Hot Water Shower",
    description: "En-suite bathroom in every room with high-pressure instant water heating.",
    iconName: "Droplets",
    image: amenityHotShowerImg
  },
  {
    id: "tv",
    name: "Flat-Screen TV",
    description: "LED television sets mounted in all rooms for news and entertainment.",
    iconName: "Tv",
    image: amenitySmartTvImg
  },
  {
    id: "front-desk",
    name: "24/7 Front Desk Assistance",
    description: "Round-the-clock reception team ready to assist with check-ins, queries, and security.",
    iconName: "Clock",
    image: lobbyReceptionImg
  },
  {
    id: "elevator",
    name: "Elevator / Lift Access",
    description: "Convenient elevator service providing smooth access to all room floors.",
    iconName: "ArrowUpFromLine",
    image: exteriorImg
  },
  {
    id: "keycard",
    name: "Electronic Key Card Locks",
    description: "Secure digital key card access to rooms and hotel entrance corridors.",
    iconName: "KeyRound",
    image: amenityKeycardImg
  },
  {
    id: "housekeeping",
    name: "Daily Housekeeping",
    description: "Professional cleaning, bed making, fresh towels, and immaculate room sanitation.",
    iconName: "Sparkles",
    image: twinRoomImg
  },
  {
    id: "kettle",
    name: "In-Room Kettle & Water",
    description: "Electric kettle, complimentary drinking water bottles, and mugs provided.",
    iconName: "Coffee",
    image: familySuiteImg
  },
  {
    id: "toiletries",
    name: "Fresh Towels & Toiletries",
    description: "Essential bathing amenities, shampoo, body soap, and clean bath towels.",
    iconName: "ShieldCheck",
    image: amenityTowelsImg
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    name: "i-City Theme Park & SnoWalk",
    category: "Entertainment & Leisure",
    distance: "1.8 km",
    driveTime: "5 mins",
    image: attractionICityImg,
    description: "Malaysia's famous digital light city featuring SnoWalk winter park, WaterWorld, CityWalk, and spectacular evening illuminations."
  },
  {
    name: "Sultan Salahuddin Abdul Aziz Shah Mosque",
    category: "Cultural Landmark",
    distance: "4.5 km",
    driveTime: "8 mins",
    image: attractionBlueMosqueImg,
    description: "Malaysia's magnificent Blue Mosque, renowned for its towering minarets and stunning Islamic architectural dome."
  },
  {
    name: "Central i-City Shopping Centre",
    category: "Shopping & Dining",
    distance: "1.9 km",
    driveTime: "5 mins",
    image: exteriorImg,
    description: "Large modern retail destination with department stores, cinema, international dining, Sogo, and supermarkets."
  },
  {
    name: "Universiti Teknologi MARA (UiTM) Shah Alam",
    category: "Higher Education",
    distance: "2.1 km",
    driveTime: "4 mins",
    image: lobbyReceptionImg,
    description: "Main campus of UiTM. Convenient lodging for parents attending convocations, visiting lecturers, and exam candidates."
  },
  {
    name: "Hospital Shah Alam",
    category: "Healthcare",
    distance: "1.2 km",
    driveTime: "3 mins",
    image: twinRoomImg,
    description: "Major government hospital in Seksyen 7, providing immediate accessibility for visiting families and medical staff."
  },
  {
    name: "Seksyen 7 Commercial & Food District",
    category: "Dining & Boutiques",
    distance: "0.2 km",
    driveTime: "Walking distance",
    image: deluxeRoomImg,
    description: "Vibrant neighborhood filled with halal restaurants, cafes, Malay culinary delights, fashion boutiques, and convenience marts."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Seeds Hotel Exterior & Street Entrance",
    category: "exterior",
    image: exteriorImg,
    caption: "Contemporary boutique exterior facade in Seksyen 7 Shah Alam with ambient evening illumination."
  },
  {
    id: "g2",
    title: "Deluxe King & Queen Bed Chamber",
    category: "rooms",
    image: deluxeRoomImg,
    caption: "Spotless king bedroom featuring luxury purple velvet accents, golden pendant lighting, and crisp white linens."
  },
  {
    id: "g3",
    title: "Standard Twin Accommodation",
    category: "rooms",
    image: twinRoomImg,
    caption: "Twin single configuration with pristine comfort, modern headboards, reading lights, and tile flooring."
  },
  {
    id: "g4",
    title: "Family Suite Room Arrangement",
    category: "rooms",
    image: familySuiteImg,
    caption: "Spacious family layout with king bed and single bed, ambient cove lighting, and flat-screen TV."
  },
  {
    id: "g5",
    title: "24-Hour Reception & Guest Lobby",
    category: "lobby",
    image: lobbyReceptionImg,
    caption: "Warm welcome at the marble reception desk with purple and gold feature walls and 24-hour service."
  },
  {
    id: "g6",
    title: "Private En-Suite Hot Rain Shower",
    category: "rooms",
    image: amenityHotShowerImg,
    caption: "Spotless en-suite bathroom with chrome rain shower and instant hot water heating."
  },
  {
    id: "g7",
    title: "i-City Theme Park Illuminations",
    category: "exterior",
    image: attractionICityImg,
    caption: "Nearby world-famous i-City digital light city and theme park, just 5 minutes from Seeds Hotel."
  },
  {
    id: "g8",
    title: "Blue Mosque Shah Alam",
    category: "exterior",
    image: attractionBlueMosqueImg,
    caption: "Sultan Salahuddin Abdul Aziz Shah Mosque, iconic Malaysian cultural landmark nearby."
  }
];
