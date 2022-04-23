import axios from '../axios';
import {Banck} from '../models/Banck';

export const getBancks = async (): Promise<Banck[]> => {
  const apiResponse = await axios.get<Banck[]>('/');
  return apiResponse.data;
};
