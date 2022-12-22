// https://regularswitch.com/wp-json/wp/v2/pages/?slug=contact-3
// https://regularswitch.com/wp-json/wp/v2/pages/?slug=contact-3&translate=EN

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
