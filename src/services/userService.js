import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/create`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/list`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
