// components/PetCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PetCard = ({ id, name, species, image }) => {
  return (
    <Link href={`/pets/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={image || '/images/default-pet.jpg'} // Ảnh mặc định nếu không có
            alt={name || 'Thú cưng'}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm">{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
