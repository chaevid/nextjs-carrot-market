import crypto from 'crypto';
import client from '@/lib/server/client';
import withHandler, { ResponseType } from '@/lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) {
    return res.status(400).json({
      ok: false,
      message: 'No email or phone provided',
    });
  }

  const payload = crypto
    .createHash('sha256')
    .update(user.email || user.phone)
    .digest('hex');
  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
