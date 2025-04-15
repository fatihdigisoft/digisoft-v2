import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const busboy = require('busboy');
  const bb = busboy({ headers: req.headers });

  bb.on('file', (_, file, info) => {
    const saveTo = path.join(process.cwd(), 'public', 'uploads', info.filename);
    const stream = fs.createWriteStream(saveTo);
    file.pipe(stream);
  });

  bb.on('close', () => res.status(200).end());

  req.pipe(bb);
}
