import axios from 'axios';

const API_URL = 'https://logiclike.com/docs/courses.json';

export const fetchCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};