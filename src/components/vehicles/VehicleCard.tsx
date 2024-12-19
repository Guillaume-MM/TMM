import React from 'react';
import { Truck } from 'lucide-react';
import type { Vehicle } from '../../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  const statusColors = {
    available: 'bg-green-100 text-green-800',
    reserved: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
  };

  const statusText = {
    available: 'Disponible',
    reserved: 'Réservé',
    maintenance: 'En maintenance',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Truck className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="text-lg font-medium text-gray-900">{vehicle.name}</h3>
            <p className="text-sm text-gray-500">{vehicle.plate_number}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[vehicle.status]}`}>
          {statusText[vehicle.status]}
        </span>
      </div>
      
      {vehicle.status === 'available' && (
        <button
          onClick={() => onSelect(vehicle)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Réserver ce véhicule
        </button>
      )}
    </div>
  );
}