import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createFixture = async (players, duration) => {
  try {
    const response = await axios.post(`${API_URL}/fixture/create`, { players, duration });
    return response.data;
  } catch (error) {
    console.error('Error creating fixture:', error);
    throw error;
  }
};

export const getFixtures = async () => {
  try {
    const response = await axios.get(`${API_URL}/fixture`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    throw error;
  }
};
