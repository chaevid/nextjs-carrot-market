import { client } from '@/lib/server/client';
import withHandler, { ResponseType } from '@/lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '@/lib/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === 'GET') {
    const products = await client.product.findMany({});
    res.json({ ok: true, products });
  }
  if (req.method === 'POST') {
  }
  res.json({
    ok: true,
    product,
  });
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler: handler })
);
