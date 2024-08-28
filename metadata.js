import { parseFile } from 'music-metadata';
import fs from 'fs/promises';

export const meta = async(filNam) => {
  try {
    const metadata = await parseFile(`./public/music/${filNam}`);
    const lyric = await fs.readFile(`./public/lyrics/${filNam.slice(0, -4) + '.lrc'}`, 'utf8');
    let picFormat = metadata.common.picture[0].format;
    let picData = metadata.common.picture[0].data;
    const finalOutput = {
       file : filNam,
       title : metadata.common.title,
       artist : metadata.common.artist,
       picture : `data:${picFormat};base64,${picData.toString('base64')}`,
       lyric : lyric
    }
    return finalOutput;
  } catch (error) {
    console.error(error.message);
  }
}
