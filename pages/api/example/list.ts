import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number | string
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  res.status(200).json([
    {
      id: 1,
      name: 'Done',
    },
    {
      id: 2,
      name: 'In',
    },
    {
      id: 3,
      name: 'Out',
    },
  ])
}
