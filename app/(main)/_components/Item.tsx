import React from 'react';

import { Item } from '@/types/nasa-data.model';

interface NasaDataItemProps {
  item: Item;
}

export function NasaDataItem({ item }: NasaDataItemProps) {
  return (
    <a href="#" className="block p-4 border">
      {item?.links && (
        <img
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
          src={item.links.at(0)?.href!}
          alt=""
        />
      )}

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        {item?.data.at(0)?.title}
      </h3>

      <p className="mt-2 max-w-sm text-gray-700 line-clamp-3">
        {item?.data.at(0)?.description}
      </p>
    </a>
  );
}
