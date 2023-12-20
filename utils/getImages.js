import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'public', 'img', 'covers');
  const filenames = fs.readdirSync(directory);

  const images = filenames.map(filename => ({
    src: `/img/covers/${filename}`,
    alt: filename.replace(/\.[^.]+$/, ''), // remove file extension
  }));

  return {
    props: {
      images,
    },
  };
}