import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number | string
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query
  const list = [
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
  ]
  res.status(200).json(list?.find(e => e?.id?.toString() === id) ?? null)
}
