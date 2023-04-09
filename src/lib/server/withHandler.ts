import { NextApiRequest, NextApiResponse } from 'next';
import { type } from 'os';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type methodType = 'GET' | 'POST' | 'DELETE';

interface ConfigType {
  methods: methodType[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as methodType)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res
        .status(401)
        .json({ ok: false, error: 'Unauthorized. Please Log In' });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
