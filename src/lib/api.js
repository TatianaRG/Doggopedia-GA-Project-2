import axios from 'axios';

const baseUrl = 'https://api.thedogapi.com/v1';

export const getAllDogs = () => {
  return axios.get(`${baseUrl}/breeds`);
};

export const getSingleDog = (point) => {
  return axios.get(`${baseUrl}/breeds/search?q=${point.toLowerCase()}`);
};

// https://api.TheDogAPI.com/v1/breeds/search?q=akita
