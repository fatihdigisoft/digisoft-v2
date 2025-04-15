import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dir = path.join(process.cwd(), 'public/uploads');
  const files = fs.readdirSync(dir);
  res.status(200).json({ files });
}
