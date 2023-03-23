import client from '@/lib/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: 'chaevid.dev@gmail.com',
      name: 'chaevid.dev',
    },
  });
  res.json({ ok: true });
}
