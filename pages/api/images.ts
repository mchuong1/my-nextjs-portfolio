import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res:NextApiResponse) {
  const { filename } = req.query;

  if (typeof filename === 'string') {
    const imagePath = path.join(process.cwd(), 'public', 'images', filename);
    if (fs.existsSync(imagePath)) {
      res.status(200).json({ imagePath: `/images/${filename}` });
    } else {
      console.warn(`Image not found: ${filename}`)
      res.status(404).json({ imagePath: '' });
    }
  } else {
    console.warn(`Invalid filename: ${filename}`);
    res.status(400).json({ imagePath: '' });
  }
}