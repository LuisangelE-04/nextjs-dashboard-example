import { auth as middleware } from '@/auth';
const handler = middleware;

export { handler as GET, handler as POST }
