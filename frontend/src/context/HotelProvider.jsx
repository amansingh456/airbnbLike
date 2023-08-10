import { createContext, useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';

export const HotelContext = createContext([]);

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getPlaces = async () => {
      const { data } = await axiosInstance.get('/places');
      console.log('data: ', data);
      setHotels(data.places);
      setLoading(false);
    };
    getPlaces();
  }, []);

  return (
    <HotelContext.Provider value={{ hotels, setHotels, setLoading, loading }}>
      {children}
    </HotelContext.Provider>
  );
};
