import { DefaultSelection } from '@prisma/client/runtime/library';
import { } from 'next-auth';

declare module 'next-auth' {
  interface session {
    user: User & DefaultSelection['user']
  }
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: null | string | boolean;
  image?: string;
  stripe_customer_id?: string;
  times: string[];
  address?: string;
  phone?: string;
  status: string;
  createAt: string;
  updateAt: string;
}




kkkkkkkk
