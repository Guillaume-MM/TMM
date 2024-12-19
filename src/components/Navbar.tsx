import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Calendar, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Pick-up Manager</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/vehicles"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Truck className="h-5 w-5" />
              <span>Vehicles</span>
            </Link>

            <Link
              to="/reservations"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Calendar className="h-5 w-5" />
              <span>Reservations</span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>

            <button
              onClick={() => signOut()}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}