export interface User {
  id: string;
  full_name: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Vehicle {
  id: string;
  name: string;
  plate_number: string;
  status: 'available' | 'reserved' | 'maintenance';
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  vehicle_id: string;
  user_id: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  reservation_id?: string;
  type: 'reservation_confirmation' | 'reminder' | 'cancellation' | 'system';
  message: string;
  read: boolean;
  created_at: string;
}