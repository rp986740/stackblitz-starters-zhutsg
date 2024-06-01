import { fetchNasaData } from '@/services/fetch-nasa';
import { NasaDataInterface } from '@/types/nasa-data.model';
import { useQuery } from '@tanstack/react-query';

type PageFilter = {
  page_size?: number;
  searchQuery?: string;
  year_start?: string;
  year_end?: string;
  media_type?: string;
};

export const useFeatchNasaData = ({
  page_size,
  searchQuery,
  year_start,
  year_end,
  media_type,
}: PageFilter) => {
  const query = useQuery<NasaDataInterface>({
    queryKey: ['nasa', searchQuery, page_size, media_type],
    queryFn: async () => {
      const response = await fetchNasaData('/search', {
        q: searchQuery,
        page_size,
        year_start,
        year_end,
        media_type,
      });
      if (response.status !== 200) {
        throw new Error('failed to fetch nasa');
      }
      return response.data;
    },
  });
  return query;
};
