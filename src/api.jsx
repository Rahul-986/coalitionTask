import axios from 'axios';


const auth = btoa("coalition:skills-test");

const api = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
  headers: {
    Authorization: `Basic ${auth}`, 
  },
});

export const getPatients = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
};
