import { loadEnv } from 'vite';
const env = loadEnv('development', process.cwd(), '');
console.log('GEMINI_API_KEY in loadEnv:', env.GEMINI_API_KEY ? 'Set' : 'Not Set');
