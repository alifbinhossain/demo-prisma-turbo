import client from 'database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const users = await client.user.create({
      data: JSON.parse(req.body),
    });
    if (!users)
      throw {
        message: 'Failed to create new user',
        status: 500,
      };

    return res.status(200).json({
      users,
    });
  } catch ({ message = 'An unknown error occured', status = 500 }) {
    console.error({ message, status });
    return res.status(status as number).end(message);
  }
}
