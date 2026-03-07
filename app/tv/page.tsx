import fs from 'fs';
import path from 'path';
import TVPageClient from './TVPageClient';

export default function TVPage() {
  const tvDirectory = path.join(process.cwd(), 'public', 'tv');
  let baseImages: string[] = [];

  try {
    const files = fs.readdirSync(tvDirectory);
    baseImages = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
      })
      .sort((a, b) => {
        // Sort slides by number if they follow the 'slideX.ext' pattern
        const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      })
      .map(file => `/tv/${file}`);
  } catch (error) {
    console.error('Error reading TV images directory:', error);
    // Fallback to a single image or empty array if directory read fails
    baseImages = [];
  }

  return <TVPageClient baseImages={baseImages} />;
}