import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
  timeout: 5000,
  headers: { 'X-Mashape-Key': 'O32rMZ5e6rmshf84SUhYDpslILd4p1VUWPtjsn8HzksQjM7RvY', Accept: 'application/json' },
});

export default instance;
