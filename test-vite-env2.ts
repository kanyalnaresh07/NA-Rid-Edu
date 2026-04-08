import { loadEnv } from 'vite';
const env = loadEnv('production', '.', '');
console.log('env.GEMINI_API_KEY:', env.GEMINI_API_KEY);
