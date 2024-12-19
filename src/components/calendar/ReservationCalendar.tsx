import React from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Reservation } from '../../types';

interface ReservationCalendarProps {
  reservations: Reservation[];
  onDateSelect: (date: Date) => void;
}

export default function ReservationCalendar({ reservations, onDateSelect }: ReservationCalendarProps) {
  const today = new Date();
  const startDate = startOfWeek(today, { locale: fr });
  
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    return {
      date,
      dayName: format(date, 'EEEE', { locale: fr }),
      dayNumber: format(date, 'd', { locale: fr }),
    };
  });

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weekDays.map(({ dayName, dayNumber, date }) => (
          <button
            key={dayName}
            onClick={() => onDateSelect(date)}
            className="bg-white p-4 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <p className="text-sm font-medium text-gray-900 capitalize">
              {dayName}
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {dayNumber}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}