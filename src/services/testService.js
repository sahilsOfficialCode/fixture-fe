import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getTestData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching test data:', error);
    throw error;
  }
};
