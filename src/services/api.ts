import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const loginUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const submitPitForm = async (teamId, formData) => {
    const response = await axios.post(`${API_URL}/teams/${teamId}/pit`, formData);
    return response.data;
};

export const submitReconForm = async (teamId, formData) => {
    const response = await axios.post(`${API_URL}/teams/${teamId}/recon`, formData);
    return response.data;
};

export const fetchTeamData = async (teamId) => {
    const response = await axios.get(`${API_URL}/teams/${teamId}`);
    return response.data;
};

export const fetchAllTeams = async () => {
    const response = await axios.get(`${API_URL}/teams`);
    return response.data;
};