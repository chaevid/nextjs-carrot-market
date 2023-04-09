import client from '@/lib/server/client';
import withHandler from '@/lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const token = await client.token.create({
    data: {
      payload: '12345',
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: 'Anonymous',
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  /* // Login - EMAIL
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      console.log('Found user : ', user);
    }
    if (!user) {
      console.log('Did not find. Creating user : ', email);
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          email,
        },
      });
      console.log('Created user : ', user);
    }
  }
  // Login - PHONE
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) {
      console.log('Found user : ', user);
    }
    if (!user) {
      console.log('Did not find. Creating user : ', phone);
      user = await client.user.create({
        data: {
          name: 'Anonymous',
          phone: +phone,
        },
      });
      console.log('Created user : ', user);
    }
  } */
  return res.status(200).end();
}

export default withHandler('POST', handler);
