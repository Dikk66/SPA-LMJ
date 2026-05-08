export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  image?: string;
}

export interface Booking {
  id?: string;
  customerName: string;
  phone: string;
  serviceId: string;
  address: string;
  date: string;
  time: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}