import { toPng } from 'https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/+esm';

const node = document.getElementById('linkedin');

toPng(node, {
  pixelRatio: 4, 
  backgroundColor: '#2a2a3b' 
  })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'ascii.png';
    link.href = dataUrl;
    link.click();
  })
  .catch((err) => {
    console.error('Export failed:', err);
  });
