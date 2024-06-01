'use client';
import { useState } from 'react';
import { useFeatchNasaData } from '@/hooks/useFetchNasaData';
import { Loader } from './_components/loader';
import { NasaDataItem } from './_components/Item';
import { SearchForm } from './_components/search-form';
import { SearchFormType } from '@/schema/search-form';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('""');
  const [pageSize, setPageSize] = useState(10);
  const [mediaType, setMediaType] = useState('image');
  const { data, isLoading, isSuccess, isError } = useFeatchNasaData({
    page_size: pageSize,
    searchQuery,
    media_type: mediaType,
  });

  const handleOnForm = (values: SearchFormType) => {
    if (values.q) {
      setSearchQuery(values.q);
    }
    if (values.media_type) {
      setMediaType(values.media_type);
    }
  };

  return (
    <main className="container h-full">
      <div className="grid grid-cols-1 pb-4">
        <SearchForm handleOnSearch={handleOnForm} />
      </div>
      {isError && <div className="text-red-500">Error fetching data.</div>}
      {isSuccess && data?.collection?.items?.length === 0 && (
        <div className="text-center p-4">No data found.</div>
      )}
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {isSuccess &&
          data?.collection.items.map((nasa) => (
            <NasaDataItem key={nasa?.href} item={nasa} />
          ))}
      </div>
    </main>
  );
}
