import fs from 'fs';
import path from 'path';

async function downloadLogo() {
  try {
    const dir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log('Fetching logo...');
    const res = await fetch('https://lh3.googleusercontent.com/d/1UGmsFQibiFSorRM7TDKvxDD07Ywnrv0g');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const filePath = path.join(dir, 'logo.png');
    fs.writeFileSync(filePath, buffer);
    console.log('Successfully saved logo to', filePath);
  } catch (error) {
    console.error('Failed to download logo:', error);
  }
}

downloadLogo();
