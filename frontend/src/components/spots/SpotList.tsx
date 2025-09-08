import React from 'react';
import { Spot } from '@/types/spots';
import SpotCard from './SpotCard';

interface SpotListProps {
  spots: Spot[];
  loading?: boolean;
  error?: string;
  onSpotClick?: (spot: Spot) => void;
  className?: string;
}

const SpotList: React.FC<SpotListProps> = ({
  spots,
  loading = false,
  error,
  onSpotClick,
  className = ''
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48 w-full"></div>
            <div className="mt-2 space-y-2">
              <div className="bg-gray-200 rounded h-4 w-3/4"></div>
              <div className="bg-gray-200 rounded h-3 w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (spots.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className="text-gray-500 mb-4">No spots found</p>
        <p className="text-sm text-gray-400">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          spot={spot}
          onClick={() => onSpotClick?.(spot)}
        />
      ))}
    </div>
  );
};

export default SpotList;
