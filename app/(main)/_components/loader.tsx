import React from 'react';
import { Loader2 } from 'lucide-react';
export const Loader = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="h-10 w-10 text-teal-600 animate-spin duration-750" />
    </div>
  );
};
