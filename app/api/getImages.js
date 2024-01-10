import fs from 'fs';
import path from 'path';

function handler(req, res) {
    const directoryPath = path.join(process.cwd(), 'public');
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        res.status(500).json({ error: 'Failed to read directory' });
      } else {
        res.status(200).json({ files });
      }
    });
  }


export default handler