import twilio from 'twilio';
import crypto from 'crypto';
import client from '@/lib/server/client';
import withHandler, { ResponseType } from '@/lib/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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
    .update(user.email || user.phone?.toString())
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

  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSG_SID,
      to: process.env.MY_PHONE!, //PRODUCTION : `to: phone`
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
