import client from '@/lib/server/client';
import withHandler, { ResponseType } from '@/lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  console.log(token);
  res.status(200).end();
}

export default withHandler('POST', handler);
