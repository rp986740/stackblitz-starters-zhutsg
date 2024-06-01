import { NasaDataInterface } from '@/types/nasa-data.model';
import axios from 'axios';

const baseUrl = 'https://images-api.nasa.gov';

export const fetchNasaData = async (endpoint: string, params = {}) => {
  const url = `${baseUrl}${endpoint}`;
  const response = await axios.get<NasaDataInterface>(url, {
    params: {
      ...params,
    },
  });
  return response;
};
