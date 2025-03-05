import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_RAPID_API_KEY;

export const drugApi = axios.create({
  baseURL: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'drug-info-and-price-history.p.rapidapi.com'
  }
})

export const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_OPEN_AI_KEY}`,
  }
})

